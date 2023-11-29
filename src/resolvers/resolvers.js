import {PrismaClient} from '@prisma/client'
import {Query} from "./query.js";
import {Mutation} from "./mutations.js";

export const resolvers =  {
           Query,
           Mutation

}