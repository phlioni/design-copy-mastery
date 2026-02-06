import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, recintos } = req.body;

  // Configuração do seu Outlook Corporativo (SMTP)
  // Recomendo usar Variáveis de Ambiente para a senha não ficar exposta aqui
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Servidor do Outlook/Office 365
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: "pedro.diniz@mosten.com", // Seu e-mail
      pass: process.env.EMAIL_PASSWORD, // A senha será configurada na Vercel
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site ViSia" <pedro.diniz@mosten.com>`, // Quem envia (tem que ser o mesmo do auth)
      to: "roberto.claro@mosten.com, pedro.diniz@mosten.com", // Quem recebe
      replyTo: email, // Para você clicar em "Responder" e ir para o cliente
      subject: `Nova Lead ViSia: ${company}`,
      html: `
        <h3>Nova solicitação de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Recintos:</strong> ${recintos}</p>
      `,
    });

    return res.status(200).json({ message: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao enviar e-mail", error: error.message });
  }
}
