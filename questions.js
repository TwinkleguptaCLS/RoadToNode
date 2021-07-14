// process.stdout.write("HELLO\n");
// process.stdout.write("Twinkleeeee\n");


const questions = [
    "What is you name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) =>
{
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(`  >   `);
}

ask();

const answers = [];

process.stdin.on('data',data=>{
    // process.stdout.write(`\n\n ${data.toString().trim()} \n`);
    answers.push(data.toString().trim());
    if(answers.length < questions.length)
    {
        ask(answers.length);
    }
    else
    {
    process.exit();
    }
});

process.on("exit",()=>{
    const [name,activity,lang] = answers;
    console.log(`
        Thank you for your answers.

        GO ${activity} ${name} you can write ${lang} code later !!!

    `)
})