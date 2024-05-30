import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    imgurl: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    originalCost: {
      type: String,
      required: true,
    },
    discountCost: {
      type: String,
      required: true,
    },
    hotelOptions: {
      type: String,
      required: true,
    },
    icludedService: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Destinations = mongoose.model("Destinations", destinationSchema);
