import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: 'pavan.h.b@edreq.in',
        pass: 'Edreq.in@2023',
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Transporter verification failed:', error);
    } else {
        console.log('Transporter is ready to send emails:', success);
    }
});

export default transporter;