/**
 * ------------------------------------------------------
 * Task 5
 * Send an email using Nodemailer.
 *
 * Replace the placeholder values with your own
 * credentials before testing.
 * ------------------------------------------------------
 */

const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: "yassinekalthoum@gmail.com",

        pass: "YOUR_APP_PASSWORD"

    }

});

// Email configuration
const mailOptions = {

    from: "YOUR_EMAIL@gmail.com",

    to: "YOUR_EMAIL@gmail.com",

    subject: "Node.js Test Email",

    text: "Hello! This email was sent using Node.js and Nodemailer."

};

// Send email
transporter.sendMail(mailOptions, (error, info) => {

    if (error) {

        console.log("Error:");

        console.log(error);

    } else {

        console.log("Email sent successfully!");

        console.log(info.response);

    }

});