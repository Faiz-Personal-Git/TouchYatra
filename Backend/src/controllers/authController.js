import jwt from "jsonwebtoken"
import { asyncHandler, ApiResponse, ApiError, config } from "../utils/index.js";
import { UserModel } from "../models/index.js";

const cookieOptions = {
    httpOnly: true,
    secure: true
}

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await UserModel.findById(userId)
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, ErrorTypes.Unknown_Error, "Something went wrong while generating referesh and access token")
    }
}

export const registerUser = asyncHandler(async (req, res) => {

    const { FirstName, LastName, DisplayName, Email, Password, IsEmailVerified } = req.body;

    const UserUniqueId = `${"USR"}${Math.floor(Date.now() / 1000)}`

    // Check if user already exists
    const existingUser = await UserModel.findOne({ Email });
    if (existingUser) {
        if (existingUser.IsEmailVerified) {
            throw new ApiError(400, "User with this email already exists and is verified");
        }

        if (existingUser.DisplayName === DisplayName) {
            existingUser.FirstName = FirstName;
            existingUser.LastName = LastName;
            existingUser.Password = Password;
            existingUser.IsEmailVerified = IsEmailVerified;
            existingUser.EmailVerificationToken = existingUser.generateEmailVerificationToken();
            await existingUser.save();

            // send verification email

            return new ApiResponse(200, null, "User details updated. Please verify your email to complete registration.");
        }

        var userWithSameDisplayName = await UserModel.findOne({ DisplayName });
        if (userWithSameDisplayName)
            throw new ApiError(400, "Display name is already taken. Please choose a different one.");

        existingUser.FirstName = FirstName;
        existingUser.DisplayName = DisplayName;
        existingUser.LastName = LastName;
        existingUser.Password = Password;
        existingUser.IsEmailVerified = IsEmailVerified;
        existingUser.EmailVerificationToken = existingUser.generateEmailVerificationToken();
        await existingUser.save();

        // send verification email

        return new ApiResponse(200, null, "User details updated. Please verify your email to complete registration.");
    }

    // Create a new user
    const newUser = await UserModel.create({
        FirstName,
        LastName,
        DisplayName,
        Email,
        Password,
        IsEmailVerified,
        UserUniqueId
    });

    newUser.EmailVerificationToken = newUser.generateEmailVerificationToken();
    await newUser.save();
    // send verification email

    return new ApiResponse(201, null, "User registered successfully")
});

export const verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.body;

    var decryptToken = jwt.verify(token, config.emailVerificationTokenSecret);
    if (!decryptToken || !decryptToken._id) {
        throw new ApiError(400, "Invalid or expired email verification token");
    }

    // Find user by email verification token
    const user = await UserModel.findById(decryptToken._id);
    if (!user) {
        throw new ApiError(400, "Invalid or expired email verification token");
    }
    user.IsEmailVerified = true;
    user.EmailVerificationToken = undefined;
    await user.save();
    return new ApiResponse(200, null, "Email verified successfully");
});

export const resendEmailVerification = asyncHandler(async (req) => {
    const { email } = req.body;

    const user = await UserModel.findOne({ Email: Email });
    if (!user) {
        throw new ApiError(404, null, "User not found");
    }

    user.EmailVerificationToken = user.generateEmailVerificationToken();

    await user.save();

    // Send email verification link
    // ...

    return new ApiResponse(200, null, "Email verification link resent");
});

export const loginUser = asyncHandler(async (req, res) => {
    const { Email, Password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ Email });
    if (!user) {
        throw new ApiError(400, "Invalid email or password");
    }
    if (!user.IsEmailVerified) {
        throw new ApiError(400, "Email is not verified. Please verify your email to login.");
    }

    // Check if password is correct
    const isPasswordCorrect = await user.isPasswordCorrect(Password);
    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid email or password");
    }
    // Generate tokens
    const tokens = await generateAccessAndRefereshTokens(user._id);

    res
        .status(200)
        .cookie("accessToken", tokens.accessToken, cookieOptions)
        .cookie("refreshToken", tokens.refreshToken, cookieOptions)
        .json(
            new ApiResponse(200, user.DisplayName, "Login successful")
        );

});

export const googleLogin = asyncHandler(async (req, res) => {
    const { Email } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ Email });
    if (!user) {
        throw new ApiError(400, `The email address "${Email}" is not registered. Please sign up before attempting to log in.`);

    }
    if (!user.IsEmailVerified) {
        throw new ApiError(400, "Email is not verified. Please verify your email to login.");
    }

    // Generate tokens
    const tokens = await generateAccessAndRefereshTokens(user._id);

    res
        .status(200)
        .cookie("accessToken", tokens.accessToken, cookieOptions)
        .cookie("refreshToken", tokens.refreshToken, cookieOptions)
        .json(
            new ApiResponse(200, user.DisplayName, "Login successful")
        );
});

export const logoutUser = asyncHandler(async (req, res) => {
    await UserModel.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                RefreshToken: 1 // this removes the field from document
            }
        },
        { new: true }
    )

    res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"))
})

export const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.headers['X-Authorization-Refresh'] || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            config.refreshTokenSecret
        )

        const user = await UserModel.findById(decodedToken?._id)

        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }

        if (incomingRefreshToken !== user?.RefreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")

        }

        const tokens = await generateAccessAndRefereshTokens(user._id)

        res
            .status(200)
            .cookie("accessToken", tokens.accessToken, options)
            .cookie("refreshToken", tokens.refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    tokens,
                    "Access token refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

export const getLoggerDetails = asyncHandler(async (req, res) => {
    return new ApiResponse(200, req.user, "User details fetched successfully")
})
