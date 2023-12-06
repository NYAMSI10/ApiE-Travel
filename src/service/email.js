import nodemailer from "nodemailer";
import 'dotenv/config'



const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jermain.christiansen@ethereal.email',
        pass: 'yNgaU7pnmuBzBGeZrb'
    }
});


export const mail = async (email,password) => {

      return transporter.sendMail({
          from: 'apitravel@gmail.com',
          to:  `${email}`,
          subject: 'Inscription',
          html: ` voici votre mot de passe ${password}`
      })
}



