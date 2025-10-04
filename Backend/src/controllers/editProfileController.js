import { ApiResponse, ApiError } from "../utils/index.js";
import { UserModel, SocialMediaModel } from "../models/index.js";
import { asyncHandler } from "../utils/index.js";

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
    }
  ])


  if (!user[0]) {
    throw new ApiError(400, "user not found");
  }

  return new ApiResponse(200, user[0], "user fetched successfully")
});

export const updateSocialMedia = asyncHandler(async (req, res) => {
  debugger
  const { UserUniqueId, Instagram, Facebook, Youtube, Dribbble, Github, Twitter, Discord, Linkedin, Telegram, Behance, Tiktok, Medium } = req.body;

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

  const updated = await SocialMediaModel.updateOne(
    { UserUniqueId },   // filter
    { $set: updateFields }  // update
  );

  if (updated.matchedCount === 0) {
    throw new ApiError(404, "Social media profile not found");
  }

  return new ApiResponse(200, null, "Social media updated successfully");
});

const getRelativePath = (file) => {
  // Only process if file exists
  if (!file?.path) return undefined;

  // Split after /public to get the relative path
  const relativePath = file.path.split("public")[1]?.replace(/\\/g, "/");
  return relativePath ? relativePath : undefined;
};

export const updateUserDetail = asyncHandler(async (req, res) => {
  const {
    UserUniqueId,
    FirstName,
    LastName,
    Roles,
    Description,
    Availability,
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

