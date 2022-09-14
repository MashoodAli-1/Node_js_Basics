const { readFileSync, writeFileSync, read } = require("fs");

const first = readFileSync("./context/first.txt", "utf8");
const second = readFileSync("./context/second.txt", "utf8");

console.log(first);
console.log(second);

/* by default node write file feature will create a new file and write  our data
into it but if the file is already exsist then node will overwrite the data
in order to append the data you need to use flag to  specify the flag to append
for example: {flag: 'a'} to append the data into the file */
writeFileSync(
  "./context/report-sync.txt",
  `here is the result: ${first} 
  ${second}`,
  { flag: "a" }
);
