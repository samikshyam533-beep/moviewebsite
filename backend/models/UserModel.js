import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 15,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    avtar: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
