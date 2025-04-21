
import transporter from './mailConfig.js';

export const sendVerificationMail = async (email,verificationToken) => {
    try {
        const info = await transporter.sendMail({
            from: 'pavan.h.b@edreq.in', 
            to: email, // Receiver's email
            subject: 'Email verification code', // Subject
            text: 'Hello! This is a verification code email.', // Plain text content
            html: `<p>Hello! This is a verification code <strong>${verificationToken}</strong>.</p>`, // HTML content
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Run the sendMail function
