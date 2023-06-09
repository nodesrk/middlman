import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL)

        if(connection.readyState === 1) {
            return Promise.resolve(true)
        }

    } catch (err) {
        return Promise.reject(err)
    }
}

export default connectDB;