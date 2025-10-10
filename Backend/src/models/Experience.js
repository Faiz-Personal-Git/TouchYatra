import { model, Schema } from "mongoose"

const experienceSchema = new Schema({
    Company: { type: String, trim: true, required: true },
    Position: { type: String, trim: true, required: true },
    Country: { type: String, trim: true, required: true },
    State: { type: String, trim: true , required: true},
    City: { type: String, trim: true , required: true},
    Pincode: { type: String, trim: true },
    Phone: { type: String, trim: true },
    Website: { type: String, trim: true },
    StartPeriod: { type: String, trim: true, required: true },
    EndPeriod: { type: String, trim: true },
    Description: { type: String, trim: true },
    Achievements: { type: [String], trim: true },
    UserUniqueId: {
        type: String,
        trim: true,
        required: true,
        unique: false
    },
}, { timestamps: true });

export const ExperienceModel = model("Experience", experienceSchema)