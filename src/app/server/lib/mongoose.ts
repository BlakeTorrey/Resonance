import mongoose from "mongoose";

const connectionToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MongoURL || "mongodb://localhost:27017/Resonance")
        console.log("Succesfully connected to database.")
    } catch(err) {
        console.log(err)
    }
}