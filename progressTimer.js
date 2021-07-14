const waitTime  = 10000;
const waitInterval = 500;

let currTime =0;

const incTime = () =>{
    currTime+=waitInterval;
    const p = Math.floor((currTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

console.log(`Setting a ${waitTime/1000}s delay`);

const timeFinised = () =>{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
}

const interval = setInterval(incTime,waitInterval);
setTimeout(timeFinised,waitTime);