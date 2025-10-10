import { ApiResponse, ApiError } from "../utils/index.js";
import { UserModel, SocialMediaModel } from "../models/index.js";
import { asyncHandler } from "../utils/index.js";
import { array } from "three/src/nodes/TSL.js";
import { ExperienceModel } from "../models/Experience.js";
import mongoose from "mongoose";


const getRelativePath = (file) => {
  // Only process if file exists
  if (!file?.path) return undefined;

  // Split after /public to get the relative path
  const relativePath = file.path.split("public")[1]?.replace(/\\/g, "/");
  return relativePath ? relativePath : undefined;
};

export const getUserProfile = asyncHandler(async (req, res) => {
  const { displayName } = req.params;


  if (!displayName) {
    throw new ApiError(400, "DisplayName is required");
  }

  const user = await UserModel.aggregate([
    {
      $match: { DisplayName: displayName.trim() }
    },
    {
      $lookup: {
        from: 'socialmedias',    // name of the foreign collection
        localField: 'UserUniqueId',   // field in the current collection
        foreignField: 'UserUniqueId', // field in the foreign collection
        as: 'SocialMedia'
      }
    },
    {
      $unwind: {
        path: "$SocialMedia",
        preserveNullAndEmptyArrays: true // In case user has no social media record
      }
    },
    {
      $lookup: {
        from: 'experiences',
        localField: 'UserUniqueId',
        foreignField: 'UserUniqueId',
        as: 'Experience'
      }
    }
  ])


  if (!user[0]) {
    throw new ApiError(400, "user not found");
  }

  return new ApiResponse(200, user[0], "user fetched successfully")
});

export const updateSocialMedia = asyncHandler(async (req, res) => {
  const {
    UserUniqueId,
    Instagram,
    Facebook,
    Youtube,
    Dribbble,
    Github,
    Twitter,
    Discord,
    Linkedin,
    Telegram,
    Behance,
    Tiktok,
    Medium
  } = req.body;

  if (!UserUniqueId) {
    throw new ApiError(400, "UserUniqueId is required");
  }

  const updateFields = {
    ...(Instagram !== undefined && { Instagram }),
    ...(Facebook !== undefined && { Facebook }),
    ...(Youtube !== undefined && { Youtube }),
    ...(Dribbble !== undefined && { Dribbble }),
    ...(Github !== undefined && { Github }),
    ...(Twitter !== undefined && { Twitter }),
    ...(Discord !== undefined && { Discord }),
    ...(Linkedin !== undefined && { Linkedin }),
    ...(Telegram !== undefined && { Telegram }),
    ...(Behance !== undefined && { Behance }),
    ...(Tiktok !== undefined && { Tiktok }),
    ...(Medium !== undefined && { Medium }),
  };

  const existing = await SocialMediaModel.findOne({ UserUniqueId });

  if (existing) {
    const updated = await SocialMediaModel.updateOne(
      { UserUniqueId },
      { $set: updateFields }
    );

    if (updated.matchedCount === 0) {
      throw new ApiError(404, "Social media profile not found");
    }
  } else {
    await SocialMediaModel.create({
      UserUniqueId,
      ...updateFields
    });
  }

  return new ApiResponse(200, null, "Social media updated successfully");
});

export const updateUserDetail = asyncHandler(async (req, res) => {
  const {
    UserUniqueId,
    FirstName,
    LastName,
    Roles,
    Description,
    Availability,
    Email,
    Phone,
    AddressLine1,
    AddressLine2,
    Country,
    State,
    City,
    Pincode,
    MyJourney,
    Hobbies,
    Language
  } = req.body;

  const ProfileImage = req.files?.ProfileFile?.[0];
  const BackgroundImage = req.files?.BackgroundFile?.[0];

  if (!UserUniqueId) {
    throw new ApiError(400, "UserUniqueId is required");
  }

  const updateFields = {
    ...(FirstName && { FirstName }),
    ...(LastName && { LastName }),
    ...(Roles && { Roles }),
    ...(Description && { Description }),
    ...(Availability && { Availability }),
    ...(ProfileImage && { ProfileImage: getRelativePath(ProfileImage) }),
    ...(BackgroundImage && { BackgroundImage: getRelativePath(BackgroundImage) }),
    ...(Email && { Email }),
    ...(Phone && { Phone }),
    ...(AddressLine1 && { AddressLine1 }),
    ...(AddressLine2 && { AddressLine2 }),
    ...(Country && { Country }),
    ...(State && { State }),
    ...(City && { City }),
    ...(Pincode && { Pincode }),
    ...(MyJourney && { MyJourney }),
    ...(Array.isArray(Hobbies) && { Hobbies }),
    ...(Array.isArray(Language) && { Language }),
  };

  const updated = await UserModel.updateOne(
    { UserUniqueId },
    { $set: updateFields }
  );

  if (updated.matchedCount === 0) {
    throw new ApiError(404, "User detail not found");
  }

  return new ApiResponse(200, null, "User detail updated successfully");
});

export const createExperience = asyncHandler(async (req, res) => {
  const {
    Company, Position, Country, State, City,
    Pincode, Phone, Website, StartPeriod, EndPeriod,
    Description, UserUniqueId, Achievements
  } = req.body;

  if (!UserUniqueId) {
    throw new ApiError(400, "UserUniqueId is required");
  }

  const model = new ExperienceModel({
    Company, Position, Country, State, City,
    Pincode, Phone, Website, StartPeriod, EndPeriod,
    Description, UserUniqueId, Achievements
  });

  await model.save();

  return new ApiResponse(200, null, "Experience added successfully");
});


export const deleteExperience = asyncHandler(async (req, res) => {
  const { _id } = req.params;

  if (!_id) {
    throw new ApiError(400, "Id is required to delete your experience");
  }

  const objectId = new mongoose.Types.ObjectId(_id);

  const result = await ExperienceModel.deleteOne({ _id: objectId });

  if (result.deletedCount === 0) {
    throw new ApiError(404, "Experience not found or already deleted");
  }

  return res.status(200).json(
    new ApiResponse(200, null, "Experience deleted successfully")
  );
});

