import {NextResponse} from "next/server";
import connectMongoDB from "../backend/config/dbConnect";
import Pett from "./db/models/pet";

export async function POST(request) {
  await connectMongoDB();
  const {title} = await request.json();

  await Pett.create({title});
  return NextResponse.json({message: "Pet created"}, {status: 201});
}
