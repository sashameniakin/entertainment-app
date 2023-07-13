import {NextResponse} from "next/server";
import Movies from "../backend/models/movie";
import dbConnect from "../backend/config/dbConnect";

export async function GET() {
  await dbConnect();

  const movies = await Movies.find({});

  console.log(movies);

  return NextResponse.json("Succsess");
}
