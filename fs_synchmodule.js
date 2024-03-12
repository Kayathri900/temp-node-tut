const {readFileSync,writeFileSync}= require('fs');
//const fs=require('fs');
console.log('start')
//fs.readFileSync 
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log(first,second);

writeFileSync('./content/first1.txt','hey this is kayathri',{flag:'a'});
//console.log(writeFirst);

console.log('done with this task');
console.log('starting the next one ')