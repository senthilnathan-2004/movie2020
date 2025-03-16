import mongoose from 'mongoose';
export const connectDb = async () => {
  try{
      if(!process.env.MONGO_URI){
        console.log('Please define the MONGO_URI environment variable inside .env.local');
      }
      else{
        console.log("database connected")
        await mongoose.connect(process.env.MONGO_URI)
      }
    }
    catch(error){
       console.log(error.message)
    }
}
