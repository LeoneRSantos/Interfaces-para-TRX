import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";


export async function UserRoutes(app: FastifyInstance) {
    app.get("/usuarios", async (req) => {
        const usuarios = await prisma.usuario.findMany();

        return usuarios.map(usuario => {
            return {
                id: usuario.id,
                nome_usuario: usuario.nome_usuario,
            }
        });
    })

    app.get("/login", async (req, reply) => {
        const bodySchema = z.object({
            nome_usuario: z.string(),
            senha: z.string(),
        })

        const { nome_usuario, senha } = bodySchema.parse(req.body);
        
        const usuario = await prisma.usuario.findFirst({
            where: {
                nome_usuario: nome_usuario
            },
          })

        if (!usuario){
            reply
                .code(404)
                .send({
                    'resultado': 'usuario não encontrado',
                })
        }
        else if (usuario?.senha == senha){
            reply
                .code(200)
                .send(usuario)
        } else {
            reply
                .code(400)
                .send({
                    'resultado': 'um erro ocorreu',

                })
        }
    })
}