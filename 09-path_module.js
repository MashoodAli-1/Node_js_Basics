const path = require("path");
console.log(path);

console.log(path.sep);

const filePath = path.join("context", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(
  __dirname,
  "context",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);