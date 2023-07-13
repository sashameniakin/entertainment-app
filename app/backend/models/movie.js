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

const Movies =
  mongoose.models.Movies || mongoose.model("Movies", movieSchema, "movies");

export default Movies;
