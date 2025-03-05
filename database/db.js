import mongoose from 'mongoose';

const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Some Error Occured in connectDB function of db.js");
    console.error(error.message);
  }
}
 
export default connectDB;