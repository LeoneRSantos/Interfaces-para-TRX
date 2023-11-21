import fastify from "fastify";
import { TrxRoutes } from "./routes/trx_routes";
import { UserRoutes } from "./routes/user_routes";
import cors from "@fastify/cors"; 
const app = fastify();

app.register(UserRoutes)
// app.register(TrxRoutes)
app.register(cors, {
    origin: true, //todo mundo pode acessar a API
    // origin: ['localhost:3000'] //posso colocar uma lista com todas as URLs q podem acessar
});
app.listen({
    port: 3333,
    // host: '0.0.0.0', //precisa colocar isso aqui pra rodar no mobile
}).then(() => {
    console.log("servidor rodando em http://localhost:3333");
})