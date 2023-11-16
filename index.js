const { exec } = require("child_process");

function execCommandInTerminal(){
    var command = "tx -b 256 -p 3400 -h 127.0.0.1 -d hw:1,0"

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`${stdout}`);
    });
    
}

execCommandInTerminal()