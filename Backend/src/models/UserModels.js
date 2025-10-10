import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { config } from "../utils/index.js";
import { type } from "os";


const userSchema = new Schema(
  {
    UserUniqueId: {
      type: String,
      unique: true,
      trim: true,
    },
    FirstName: {
      type: String,
      trim: true
    },
    LastName: {
      type: String,
      trim: true
    },
    DisplayName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    Phone: {
      type: Number,
      unique: true
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    Password: {
      type: String,
      required: [true, "Password is required"],
    },
    IsEmailVerified: {
      type: Boolean,
      default: false,
    },
    RefreshToken: {
      type: String,
    },
    ForgotPasswordToken: {
      type: String,
    },
    EmailVerificationToken: {
      type: String,
    },
    Description: {
      type: String,
      trim: true,
    },
    Roles: {
      type: String,
      trim: true,
    },
    Availability: {
      type: String,
      trim: true,
    },
    ProfileImage: {
      type: String,
      trim: true,
    },
    BackgroundImage: {
      type: String,
      trim: true,
    },
    Hobbies: {
      type: [],
      trim: true,
    },
    Language: {
      type: [],
      trim: true,
    },
    MyJourney:{
      type:String,
      trim:true
    },
    AddressLine1:{
      type:String,
      trim:true
    },
    AddressLine2:{
      type:String,
      trim:true
    },
    Country:{
      type:String,
      trim:true
    },
    State:{
      type:String,
      trim:true
    },
    City:{
      type:String,
      trim:true
    },
    Pincode:{
      type:String,
      trim:true
    },
  },
  { timestamps: true }
);


userSchema.pre("save", async function (next) {

  if (this.isModified("Password")) {
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
  }

  if(this.isModified("Email")){
    this.IsEmailVerified = false;
    this.EmailVerificationToken = this.generateEmailVerificationToken();
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (password){
  return await bcrypt.compare(password, this.Password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      Email: this.Email,
      FirstName: this.FirstName,
      LastName: this.LastName,
      DisplayName: this.DisplayName
    },
    config.accessTokenSecret,
    { 
        expiresIn: config.accessTokenExpiresIn, 
        issuer: config.issuer
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    config.refreshTokenSecret,
    { 
        expiresIn: config.refreshTokenExpiresIn, 
        issuer: config.issuer
    }
  );
};

userSchema.methods.generateForgotPasswordToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    config.forgetPasswordTokenExpiresIn,
    { 
        expiresIn: config.forgetPasswordTokenExpiresIn, 
        issuer: config.issuer
    }
  );
};

userSchema.methods.generateEmailVerificationToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    config.emailVerificationTokenSecret,
    { 
        expiresIn: config.emailVerificationTokenExpiresIn, 
        issuer: config.issuer
    }
  );
};

export const UserModel = model("Users", userSchema);
