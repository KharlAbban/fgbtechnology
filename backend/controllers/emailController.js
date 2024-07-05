const nodemailer = require("nodemailer");

async function sendEmail (req, res) {
    const {name, email, phone, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "khvngkharl123@gmail.com",
            pass: process.env.GMAIL_SMTP_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: `${name} ${email}`,
        to: 'kharlabban@gmail.com',
        subject: 'Message sent from FG&B Official website',
        html: message,
    }

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Email sent successfully"});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: err.message});
    }
}

module.exports = sendEmail;