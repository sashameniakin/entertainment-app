import {prop} from "@typegoose/typegoose";

class Trending {
  @prop()
  small: string;

  @prop()
  large: string;
}

class Regular {
  @prop()
  small: string;

  @prop()
  medium: string;

  @prop()
  large: string;
}

class Thumbnail {
  @prop()
  trending?: Trending;

  @prop()
  regular: Regular;
}

export class Movie {
  @prop()
  title: string;

  @prop()
  thumbnail?: Thumbnail;

  @prop()
  year: number;

  @prop()
  category: string;

  @prop()
  rating: string;

  @prop()
  isBookmarked: boolean;

  @prop()
  isTrending: boolean;
}

/* import mongoose from "mongoose";

const MoviesSchema = new mongoose.Schema({
  rank: {
    type: Number,
  },
  name: {
    type: String,
  },

  price: {
    type: Number,
  },
  markedCap: {
    type: Number,
  },
  volume: {
    type: Number,
  },
});

export const MoviesS =
  mongoose.models.MoviesS || mongoose.model("MoviesS", MoviesSchema, "moviesS"); */
