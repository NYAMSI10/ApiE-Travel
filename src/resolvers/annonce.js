import {PrismaClient} from '@prisma/client'
import throwCustomError, {ErrorTypes} from "../service/errorhandler.js";

const prisma = new PrismaClient()


export const annonceResolver = {

    Query: {
        getAnnonce: async () => {

            return prisma.annonce.findMany({
               include:{
                   user:true
               }
            })
        },

        getAnnonceById: async(parent, {id})=>{

            const annonce = await prisma.annonce.findUnique(
                {
                    where: {
                        id: parseInt(id)
                    }
                }
            )

            if (!annonce) throwCustomError(
                'annonce is not exist',
                ErrorTypes.NOT_FOUND
            );

            return prisma.annonce.findFirst({
                where:{
                    id: parseInt(id)
                },
                include:{
                    user:true,
                    images:true
                }

            })



        },

    },


    Mutation: {

        addAnnonce: async (parent, {newAnnonce}) => {
            console.log(newAnnonce.userId)


            const user = await prisma.user.findFirst({where: {id: parseInt(newAnnonce.userId)}})

            if (!user) throwCustomError(
                'user is not exist',
                ErrorTypes.NOT_FOUND
            );



            return prisma.annonce.create({
                data: {
                    title:newAnnonce.title,
                    description:newAnnonce.description,
                    startcity:newAnnonce.startcity,
                    startend:newAnnonce.startend,
                    hourstart:newAnnonce.hourstart,
                    hourend:newAnnonce.hourend,
                    datedepart:newAnnonce.datedepart,
                    placedispo:parseInt(newAnnonce.placedispo),
                    price: parseFloat(newAnnonce.price),
                    images:{
                        createMany:{
                            data: {
                                name:newAnnonce.images,
                            }
                        }
                    },
                    user:{
                        connect:{ id: user.id}
                    },
                },


            })


        }

    }


}
