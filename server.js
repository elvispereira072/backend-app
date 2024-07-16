const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'elvispereira070@gmail.com', // Coloque seu email
        pass: '1515' // Coloque sua senha do email
    }
});

// Rota de Registro
app.post('/register', (req, res) => {
    const { name, email } = req.body;

    // Simulação de registro bem-sucedido
    // Envio de email de boas-vindas
    const mailOptions = {
        from: 'elvispereira070@gmail.com', // Seu email
        to: email,
        subject: 'Registro bem-sucedido',
        text: `Olá ${name},\n\nSeu registro foi bem-sucedido!\n\nObrigado por se registrar em nosso sistema.\n\nAtenciosamente,\nEquipe E-commerce`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            res.status(500).send('Erro ao enviar email de registro.');
        } else {
            console.log('Email de registro enviado:', info.response);
            res.send('Registro bem-sucedido! Verifique seu email.');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
