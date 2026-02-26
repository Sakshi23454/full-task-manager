const nodemailer = require("nodemailer")

exports.sendEmail = ({ email, subject, message }) => new Promise((resolve, rejecct) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
        })

        transport.sendMail({
            to: email,
            subject,
            html: message
        })
        console.log("email send success")
        resolve("email send success")
    } catch (error) {
        console.log(error)
        rejecct("unable to send email")
    }
})