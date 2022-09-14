// CommonJS, every file is module (By  default)
// Modules, encapsulated Code (only share minimum)

const { john, peter } = require("./04-names");
const sayFun = require("./05-utils");
// modules

sayFun.sayHi("susan");
sayFun.sayHi(john);
sayFun.sayHi(peter);
