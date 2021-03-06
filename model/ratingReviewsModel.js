import mongoose from "mongoose";

const ratingReviewsSchema = new mongoose.Schema(
  {
    star: {
      type: Number,
      enum: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      required: [true, "Star is required."],
    },
    review: {
      type: String,
      default: undefined,
    },
    userName: {
      type: String,
      required: [true, "User name is required."],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User id is required."],
    },
    orderId: {
      type: String,
      required: [true, "Order id required."],
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Service id is required."],
    },
  },
  { timestamps: true }
);

// export
export const Ratings = mongoose.model("Rating", ratingReviewsSchema);
