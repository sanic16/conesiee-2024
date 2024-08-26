import { contactTemplate } from "./templates/contact";
import Handlebars from "handlebars";
import nodemailer from "nodemailer";
import { studentTemplate } from "./templates/student";

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const { SENDGRID_API_KEY, MAIL_DEFAULT_SENDER } = process.env;

  if (!SENDGRID_API_KEY || !MAIL_DEFAULT_SENDER) {
    throw new Error(
      "No se han configurado las variables de entorno necesarias"
    );
  }

  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: SENDGRID_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: MAIL_DEFAULT_SENDER,
      to: to,
      subject: subject,
      text: body,
      html: body,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error al enviar el correo: ${error.message}`);
    } else {
      throw new Error(`Error al enviar el correo`);
    }
  }
}

export function compileContactTemplate(
  name: string,
  email: string,
  category: string
) {
  const template = Handlebars.compile(contactTemplate);
  const htmlBody = template({
    name,
    email,
    category,
  });

  return htmlBody;
}

export function compiledStudentTemplate(name: string) {
  const template = Handlebars.compile(studentTemplate);
  const htmlBody = template({
    name,
  });

  return htmlBody;
}
