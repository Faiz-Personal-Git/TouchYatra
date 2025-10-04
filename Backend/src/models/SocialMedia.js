import mongoose, { model, Schema } from "mongoose";

const socialMediaSchema = new Schema({
  Github: { type: String, trim: true },
  Linkedin: { type: String, trim: true },
  Twitter: { type: String, trim: true },
  Instagram: { type: String, trim: true },
  Facebook: { type: String, trim: true },
  Youtube: { type: String, trim: true },
  Tiktok: { type: String, trim: true },
  Discord: { type: String, trim: true },
  Telegram: { type: String, trim: true },
  Dribbble: { type: String, trim: true },
  Behance: { type: String, trim: true },
  Medium: { type: String, trim: true },
  UserUniqueId: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
}, { timestamps: true });

export const SocialMediaModel = model("SocialMedia", socialMediaSchema);
