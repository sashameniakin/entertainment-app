import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  thumbnail: {
    trending: {
      small: {
        type: String,
      },
      large: {
        type: String,
      },
      required: false,
    },
    regular: {
      small: {
        type: String,
      },
      medium: {
        type: String,
      },
      large: {
        type: String,
      },
    },
  },
  year: {
    type: Number,
  },
  category: {
    type: String,
  },
  rating: {
    type: String,
  },
  isBookmarked: {
    type: Boolean,
  },
  isTrending: {
    type: Boolean,
  },
});

export const Movie =
  mongoose.models.Movie || mongoose.model("Movie", movieSchema, "movie");
