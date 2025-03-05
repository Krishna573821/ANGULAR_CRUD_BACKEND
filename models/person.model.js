import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      age: {
         type: Number,
         required: true,
      },
      gender: {
         type: String,
         required: true,
         enum: ["male", "female", "other"],
      },
      mobileNumber: {
         type: String,
         required: true,
         unique: true,
      },
   },
   { timestamps: true }
);


const Person = mongoose.model("Person", personSchema);
export default Person;