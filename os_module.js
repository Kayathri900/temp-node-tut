const os =require('os')
console.log(os.userInfo());
console.log(`the system uptime is ${os.uptime()} seconds `)

const sysemInfo={
    name:os.machine(),
    name1:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    uptime :os.uptime(),
    hpp:os.platform()
}
console.log(sysemInfo);