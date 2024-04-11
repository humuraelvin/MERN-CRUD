import mongoose from "mongoose";

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected To MongoDb Successfully");
    } catch (error) {
        console.log(error);
    }
}

export default dbCon;