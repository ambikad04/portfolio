import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  console.log('Received contact form:', { name, email, subject, message });

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ambikadas0412@gmail.com',
      pass: 'tbjsyqgfyltnwlbq',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: email,
      to: 'ambikadas0412@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log('Email sent:', info);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}