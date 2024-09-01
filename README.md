# CONESIEE 2024

Página web del Congreso Nacional de Estudiantes de Ingeniería Electrónica y Eléctrica 2024 (CONESIEE 2024).

## Descargar el Software Necesario

Antes de comenzar, asegúrate de tener instalado el software necesario:

- **Node.js**: [Descargar Node.js](https://nodejs.org/) - Se requiere para ejecutar el proyecto. Asegúrate de instalar la versión LTS.

## Tecnologías Utilizadas

- **Next.js**: [Documentación de Next.js](https://nextjs.org/docs) - Framework de React para aplicaciones web.
- **React**: [Documentación de React](https://es.reactjs.org/docs/getting-started.html) - Biblioteca de JavaScript para construir interfaces de usuario.
- **MongoDB**: [Documentación de MongoDB](https://docs.mongodb.com/) - Base de datos NoSQL.
- **SendGrid**: [Documentación de SendGrid](https://sendgrid.com/docs/) - Plataforma de envío de correos electrónicos.
- **Cloudinary**: [Documentación de Cloudinary](https://cloudinary.com/documentation) - Plataforma de gestión de imágenes y videos.
- **Amazon S3**: [Documentación de Amazon S3](https://docs.aws.amazon.com/s3/index.html) - Servicio de almacenamiento de objetos en la nube.
- **ReCAPTCHA**: [Documentación de ReCAPTCHA](https://developers.google.com/recaptcha/docs) - Servicio de protección contra bots.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto localmente:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/sanic16/conesiee-2024
   cd conesiee-2024
   ```

2. **Instala las dependencias de Node.js:**

   ```bash
   npm install
   ```

3. **Configura las Variables de Entorno:**

   Crea un archivo `.env` en la raíz del proyecto y copia el contenido del archivo `.env.example` en él. Luego, reemplaza los valores de las variables de entorno con los tuyos.

   ```bash
    BUCKET=bucket-example
    REGION=us-east-1
    KEY_ID=AKIEXAMPLE
    ACCESS_KEY=EXAMPLEKEY
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY=EXAMPLEKEY
    RECAPTCHA_SITE_SECRET=EAMPLESECRET

    SENDGRID_API_KEY=SG.EXAMPLEKEY
    MAIL_DEFAULT_SENDER=example@email.com
    MAIL_DEFAULT_ADMIN_1=example@email.com
    MAIL_DEFAULT_ADMIN_2=example@email.com

    AUTH_SECRET=examplesecret

    CLOUDINARY_CLOUD_NAME=EAMPLECLOUD
    CLOUDINARY_API_KEY=EXAMPLEKEY
    CLOUDINARY_API_SECRET=EXAMPLESECRET

    CLOUD_IMAGE_URL=https://res.cloudinary.com/dczuv9eyw/image/upload/vexample
    NEXT_PUBLIC_CLOUDINARY_URL=https://res.cloudinary.com/dczuv9eyw/image/upload/vexample

   ```

4. **Inicia el Servidor de desarrollo de Next.js:**

   Inicia el servidor de desarrollo de Next.js con el siguiente comando:

   ```bash
   npm run dev
   ```

   El cliente de Next.js se iniciará en [http://localhost:3000](http://localhost:3000).
