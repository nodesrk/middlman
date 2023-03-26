import connectDB from "@/utils/connectDB";
import sendMail from "@/utils/sendEmail";
import { validateEmail } from "@/utils/validation";
import Contacts from "../../../models/contactModel";



export default async function handler (req,res) {
    connectDB().catch((err) => res.json({err: "Connection Failed...!"}))

    switch (req.method) {
        case "POST":    
            await postContact(req,res)
            break;
    }
}


const postContact = async (req,res) => {
    try {
        const { name, email, message } = req.body

        if(!validateEmail(email)) return res.status(400).json({err: "Invalid Email!"})

        const newMessage = new Contacts({
            name,
            email,
            message
        })

        await newMessage.save();

        res.json({msg: "Sucessfully Submitted!"})

        await sendMail('yotest195@gmail.com', name, email, message)

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}