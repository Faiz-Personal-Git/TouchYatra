
import { asyncHandler, ApiResponse, ApiError, config } from "../utils/index.js";
import { UserModel } from "../models/UserModels.js";

export const getUserDetail = asyncHandler(async (req, res) => {
    const { DisplayName } = req.body;
    const user = await UserModel.findOne({ DisplayName });
    if (!user) {
        ApiError(400, `User not exist with this displayName : ${DisplayName}`);
    }

    if(!user.IsEmailVerified){
        ApiError(400,"Email is not verified. Please verify your email to login.");
    }

    ApiResponse(200, user, 'User fetched successfully');
})