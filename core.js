const path = require("path");
const util = require("util");
const v8 = require("v8");

//destructuring function out of modules
const {log} = require("util");
const {getHeapStatistics} = require("v8");

const diruploads = path.join(__dirname,'www','files','uploads');

console.log(diruploads);

log(path.basename(__filename)); //instead of util.log(.....)
log(getHeapStatistics()); //instead of util.log(v8.getheap...)