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
    cityTags: {
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
    duration: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    ittitle: {
      type: String,
      required: true,
    },
    itdes: {
      type: String,
      required: true,
    },
    fivestar: {
      type: String,
      required: true,
    },
    fourstar: {
      type: String,
      required: true,
    },
    threestar: {
      type: String,
      required: true,
    },
    isbestselling: {
      type: String,
      required: true,
    },
    breakfast: {
      type: String,
      required: true,
    },
    transfers: {
      type: String,
      required: true,
    },
    sightseeing: {
      type: String,
      required: true,
    },
    watersports: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Destinations = mongoose.model("Destinations", destinationSchema);
