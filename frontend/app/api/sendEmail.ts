// import type { NextApiRequest, NextApiResponse } from 'next';
// // import * as nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { name, email, isStudent, message } = req.body;

//         try {
//             // Configure Nodemailer transport
//             const transporter = nodemailer.createTransport({
//                 service: 'gmail', // or another email provider
//                 auth: {
//                     user: process.env.EMAIL_USER, // Your email
//                     pass: process.env.EMAIL_PASS, // Your email password or app password
//                 },
//             });

//             // Set up email data
//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: 'your-recipient@example.com', // Where to send the reviews
//                 subject: 'New Review Submission',
//                 text: `Name: ${name}\nEmail: ${email}\nIs Student: ${isStudent}\nMessage: ${message}`,
//             };

//             // Send email
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ message: 'Email sent successfully!' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Failed to send email' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }
