import nodemailer from "nodemailer";




var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "03ccd10b4ed957",
        pass: "********6bb0"
    }
});


export const mail = async (email,password) => {

      return transport.sendMail({
          from: 'apitravel@gmail.com',
          to:  `${email}`,
          subject: 'Inscription',
          html: ` voici votre mot de passe ${password}`
      })
}



