import mongoose from "mongoose";

const ConnectDB = async() => {
  try{
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database connected successfully at ${conn.connection.host}`.bgMagenta);
  }catch(err){
    console.error(`DB Error:-`, err);
    process.exit(1);
  }
}
export default ConnectDB;