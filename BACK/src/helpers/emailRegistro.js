import nodemailer from 'nodemailer';
require('dotenv').config();

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const { EMAIL_USER, USER_NAME, tokenunico } = datos;
    // Enviar Email
    const info = await transporter.sendMail({
        from: "TM+ - Sistema de Gestión de Contenido",
        to: EMAIL_USER,
        subject: "Confirmación de registro",
        text: `Comprueba tu cuenta en TM+`,
        html: `<p>Hola: ${USER_NAME}, Comprueba tu cuenta en TopMedia+.</p>
        <p>Tu cuenta esta lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND}/confirmar/${tokenunico}">Comprobar cuenta</a></p>

        <p>Si tu no solicitaste una cuenta, puedes ignorar este mensaje</p>
        `,
    });
    console.log("Message sent: %s", info.messageId);
}

export default emailRegistro;

