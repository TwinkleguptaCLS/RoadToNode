const waitTime = 3000;
const waitInterval = 500;
let currtime = 0;

const inctime = () =>{
    currtime+=waitInterval;
    console.log(`waiting ${currtime/1000} seconds `);
}
console.log(`Setting a ${waitTime/1000} second delay`);

const timerFinished = () => 
{   
    clearInterval(interval);
    console.log("Done!");
}


const interval = setInterval(inctime,waitInterval);
setTimeout(timerFinished,waitTime);