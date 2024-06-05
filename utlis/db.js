import mongoose from "mongoose";

const dbConnect = async() => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
  } 
  
  catch (error) {
    console.log('error');
  }
}
export default dbConnect;