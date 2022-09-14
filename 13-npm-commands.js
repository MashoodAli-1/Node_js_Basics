// npm - global command comes with node
// npm --version

// local dependency - use it only in this  particular project
// npm i <packagename>

// global dependency- use it in any  project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - mainfest file (stores important info about project/package)
// manual apporach (create package.json in the  root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y  (everything default)

const _lodash = require("lodash");

const item = [1, [2, [3, [4]]]];

const newItem = _lodash.flattenDeep(item);

console.log(newItem);
