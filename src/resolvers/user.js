import {PrismaClient} from '@prisma/client'
import bcrypt from "bcryptjs";
import {mail} from "../service/email.js";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import throwCustomError, {ErrorTypes,} from '../service/errorhandler.js';

const prisma = new PrismaClient()

export const userResolver = {

    Query: {
        // Destructing {total} is same sa args.total
        getUser: async () => {
            return prisma.user.findMany({
                include:{
                    annonce:true
                }
            })
        }
    },


    Mutation: {
        registreUser: async (parent, {newUser}) => {

            const user = await prisma.user.findUnique({where: {email: newUser.email}})

            if (user) throwCustomError(
                'Email is already Registered',
                ErrorTypes.ALREADY_EXISTS
            );

            await mail(newUser.email, newUser.password)

            return prisma.user.create({
                data: {
                    name: newUser.name,
                    email: newUser.email,
                    password: bcrypt.hashSync(newUser.password),
                    phone: newUser.phone,
                    role: "USER"

                }
            });


        },

        login: async (parent, {email, password}) => {

            const user = await prisma.user.findFirst({where: {email: email}})

            if (!user) throwCustomError(
                'Invalid email entered.',
                ErrorTypes.BAD_USER_INPUT
            );

            if (user && bcrypt.compareSync(password, user.password)) {

                const token = jwt.sign({

                    userId: user.id,
                    email: user.email,
                    role: user.role

                }, process.env.JWT_PRIVATE_KEY, {expiresIn: '1h'});
                return {user, token}
            } else {
                throwCustomError(
                    'Invalid password entered.',
                    ErrorTypes.BAD_USER_INPUT
                );
            }

        },

        updateUser: async (parent, {id, updateUser}) => {

            const user = await prisma.user.findFirst({where: {id: parseInt(id)}})

            if (!user) throwCustomError(
                'user is not exist',
                ErrorTypes.NOT_FOUND
            );

            return prisma.user.update({
                where: {
                    id: parseInt(id)
                },

                data: {
                    name: updateUser.name,
                    email: updateUser.email,
                    password: bcrypt.hashSync(updateUser.password),
                    phone: updateUser.phone,
                    adresse: updateUser.adresse,
                    ville: updateUser.ville,
                    codepostal: updateUser.codepostal,
                    avatar: updateUser.avatar,

                }
            })
        },

        deleteUser: async (parent, {id}) =>{

            const user = await prisma.user.findFirst({where: {id: parseInt(id)}})

            if (!user) throwCustomError(
                'user is not exist',
                ErrorTypes.NOT_FOUND
            );

            await prisma.user.delete({where:{id:parseInt(id)}})

            return "user delete";

        }


    }
}