import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const connectDb =async ()=>{
   try{
      const conn =mongoose.connect(process.env.URL)
      console.log('connected to database.')
   }catch(err){
      console.log("fialed to connect database.")
   }
}

export default connectDb