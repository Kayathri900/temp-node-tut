const lowdash=require('lodash');
const items=[1,[2,[3,[4]]]]
console.log(items);

const newItems=lowdash.flattenDeep(items);
console.log(newItems);
console.log(lowdash.chunk(items));