// services/emailService.js
import nodemailer from 'nodemailer';

// Create a transporter object using your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send an email
export const sendOrderConfirmationEmail = (to, orderId) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Order Confirmation',
    text: `Thank you for your order! Your order ID is ${orderId}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
