import mongoose from "mongoose";

const booknowSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const BookNow = mongoose.model("BookNow", booknowSchema);
