import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs';
import {mail} from "../service/email.js";
const prisma = new PrismaClient()
export const Mutation =  {

    registreUser: async (parent, {newUser}) =>{

         const user = await prisma.user.findUnique({where:{email:newUser.email}})

        if(user)  throw new Error(`Email ${newUser.email} existe déjà`)

         //   await mail(newUser.email, newUser.password)

        return prisma.user.create({
            data: {
                name: newUser.name,
                email: newUser.email,
                password: bcrypt.hashSync(newUser.password),
                phone: newUser.phone,
                role:"USER"

            }
        });


    },

    login: async (parent, {email, password }) =>{

            const user = await  prisma.user.findFirst({where:{email: email}})

        if (!user) throw  new Error(`Emai incorrect`)

        if (user && bcrypt.compareSync(password, user.password)){

            return user
        }else{
            throw new Error('mot de passe incorrect')
        }


    }

}