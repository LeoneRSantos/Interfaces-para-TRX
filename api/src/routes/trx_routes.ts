import { FastifyInstance } from "fastify";

import { exec, spawn } from "child_process";

export async function TrxRoutes(app: FastifyInstance) {
    app.get("/trx", async (req, reply) => {

        exec("dir", (error, stdout, stderr) => {
            // if (error) {
            //     console.log(`error: ${error.message}`);
            //     return;
            // }
            // console.log(`stdout: ${stdout}`);
            // reply
            //     .code(200)
            //     .send({
            //         'resultado': stdout,
            //     })

            var ls = spawn('dir');
            ls.stdout.on('data', (data)=> {
                console.log(data)
                reply
                    .code(200)
                    .send({
                        'resultado': stdout,
                    })
            })
            ls.stderr.on('error', (err)=> {
                console.log(err)
                reply
                    .code(200)
                    .send({
                        'erro': err,
                    })
            })
        });
    })
}