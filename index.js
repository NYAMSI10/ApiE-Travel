import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import allTypeDefs from "./src/schema/allschema.js";
import allResolvers from "./src/resolvers/allresolvers.js";



// A map of functions which return data for the schema.

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
    includeStacktraceInErrorResponses:false,
    introspection:true,
});
await server.start();

app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);