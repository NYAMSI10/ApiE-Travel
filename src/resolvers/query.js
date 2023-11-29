import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

 export const Query = {

    getUser: ()=>{
                    return prisma.user.findMany()
    }
}