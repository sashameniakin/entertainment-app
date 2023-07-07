/* import {
  prop,
  getModelForClass,
  Ref,
  modelOptions,
  index,
} from "@typegoose/typegoose";

@modelOptions({schemaOptions: {collection: "pet", timestamps: true}})
@index({name: 1})
export class Pet {
  @prop({type: () => String})
  public name: string;
}

const PetModel = getModelForClass(Pet);

export default PetModel; */

import mongoose, {Schema} from "mongoose";

const PettSchema = new Schema({
  title: String,
});

const Pett = mongoose.models.Pett || mongoose.model("Pett", PettSchema);

export default Pett;
