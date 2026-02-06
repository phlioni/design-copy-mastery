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
      from: `"Site ViSia" <pedro.diniz@mosten.com>`,
      to: "roberto.claro@mosten.com, pedro.diniz@mosten.com",
      replyTo: email,
      subject: `🚀 Nova Lead ViSia: ${company}`, // Adicionei um emoji para destaque
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            /* Reset básico para garantir que fique bonito em mobile */
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
            .header { background-color: #0f172a; padding: 24px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: bold; }
            .content { padding: 32px; background-color: #ffffff; }
            .data-row { border-bottom: 1px solid #f1f5f9; padding: 12px 0; display: flex; align-items: flex-start; }
            .label { color: #64748b; font-weight: bold; width: 120px; flex-shrink: 0; }
            .value { color: #1e293b; font-weight: 500; }
            .footer { background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
            .btn { display: inline-block; background-color: #7c3aed; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
          </style>
        </head>
        <body style="background-color: #f1f5f9; padding: 20px;">
          
          <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            
            <div style="background-color: #0f172a; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Nova Solicitação APRA/ViSia</h1>
            </div>

            <div style="padding: 32px;">
              <p style="color: #475569; margin-top: 0; margin-bottom: 24px;">Olá, um novo lead acabou de preencher o formulário de contato na Landing Page.</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; width: 30%;">Nome:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Empresa:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><strong>${company}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">E-mail:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                    <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Telefone:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Recintos:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${recintos}</td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Contato%20ViSia%20-%20Mosten" style="background-color: #7c3aed; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-family: sans-serif;">Responder Agora</a>
              </div>
            </div>

            <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              Recebido via formulário do site ViSia • ${new Date().toLocaleString("pt-BR")}
            </div>
            
          </div>
        </body>
        </html>
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
