const { spawn } = require("child_process");

const ls = spawn("pwd");

ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
    console.log("Oi")
});
