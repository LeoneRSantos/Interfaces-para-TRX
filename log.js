// log.js
const { exec } = require("child_process");

function log(comando) {
    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("std" + `stdout: ${stdout}`);
    });
}


module.exports = log;