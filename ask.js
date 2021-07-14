const readline = require("readline");

const rl = readline.createInterface(process.stdin,process.stdout);

rl.question("how you doing? \n", answer => {
    console.log(`Your answer is ${answer}`);
    rl.close();
});

//there is one issue if you not stopped the program it will keep asking for question, so use rl.close() to exit.
