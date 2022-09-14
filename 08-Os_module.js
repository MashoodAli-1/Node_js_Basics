const os = require("os");

console.log(os);
// info about current user
const user = os.userInfo();

console.log(user);

// method to return the system uptime in second
console.log(`System uptime is: ${os.uptime()} seconds`);

// current os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
