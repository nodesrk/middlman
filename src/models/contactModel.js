import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        maxlength: [20, "Your name should not exceed 20 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.contact || mongoose.model('contact', contactSchema)
export default Dataset;