import fastify from "fastify";
import { TrxRoutes } from "./routes/trx_routes";

const app = fastify();

app.register(TrxRoutes)

app.listen({
    port: 3333,
    // host: '0.0.0.0', //precisa colocar isso aqui pra rodar no mobile
}).then(() => {
    console.log("servidor rodando em http://localhost:3333");
})