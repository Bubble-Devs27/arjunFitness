import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import {bodyParser} from 'body-parser'
import nodemailer from 'nodemailer';
// export async function POST(req ,res){
//    console.log( await req.json())
//     const response = new NextResponse(JSON.stringify({ message: 'done' }), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const badresponse = new NextResponse(JSON.stringify({ message: 'done' }), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//    const resend = new Resend(process.env.RESEND_API_KEY);
//    try {
//     const data = await resend.emails.send({
//       from: 'info.arjunfitness@gmail.com',
//       to: 'bubbledevs27@gmail.com',
//       subject: 'Hello from Resend',
//       html: '<p>This is a test email sent from Vercel + Resend</p>',
//     });
//     console.log(data);
//     return response
//   } 
//   catch (error) {
//     console.log(error.message)
//     return badresponse
//   }


// }


export async function GET(){
 return NextResponse.json("Working")
}


export async function POST(req ,res){
  const details = await req.json()
  const response = new NextResponse(JSON.stringify({ message: 'done' }), {
     status: 200,
     headers: {
      'Content-Type': 'application/json',
    },
  });
  const badresponse = new NextResponse(JSON.stringify({ message: 'done' }), {
     status: 200,
    headers: {
       'Content-Type': 'application/json',
     },
 });
 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bubbledevs27@gmail.com', // replace with your email
      pass: process.env.PASS,        // replace with your email password or app password
    },
  });
  const mailOptions = {
    from: 'bubbledevs27@gmail.com',
    to: 'arjunsaini.2298@gmail.com',     // where you want to receive emails
    subject: 'New Contact Form Submission',
    html: `Contact : ${details.contact} <br><br/> Message : ${details.msg} `,
  };
  try {
  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info.response);
  return response;
} catch (error) {
  console.error('Error sending email:', error);
  return badresponse;
}
}