import nodemailer from 'nodemailer'



const transporter = nodemailer.createTransport({
    service: 'zoho',
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
})

const sendMail = async (to, name, email, message) => {
    try {
        let info = await transporter.sendMail({
            from: process.env.MAIL_EMAIL,
            to: to,
            subject: 'New Contact Has Been Added.',
            html: `
                <body style="background: #f9f9f9;">
                    <div style="max-width: 700px; margin:auto; padding: 50px 20px; text-align:center;">
                        <h1 style="color: #000; font-weight: 500; font-size: 26px;">Congratulations! A new contact has been added to Middlman</h1>

                        <div style="max-width: 75%; margin-right: auto; margin-left: auto; border: 1px solid #000;">
                           <p style="color: #000; font-weight: 500; font-size: 18px; margin-bottom: 1rem">
                            Name: ${name}
                           </p>
                           <p style="color: #000; font-weight: 500; font-size: 18px; margin-bottom: 1rem">
                            Email: ${email}
                           </p>
                           <p style="color: #000; font-weight: 500; font-size: 18px; margin-bottom: 1rem">
                            Date: ${new Date().toISOString()}
                           </p>
                           <p style="color: #000; font-weight: 500; font-size: 18px;">
                             ${message}
                           </p>
                        </div>
                    </div>
                </body>
            `
        })
    } catch (err) {
        console.log(err)
        return false;
    }
}

export default sendMail;