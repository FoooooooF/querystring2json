/**
 * node中使用
 * node 中建议直接使用原生 querystring模块
 */

const qs =require("../lib/index.js");

let str="a=1 &a=2&b=2&c=3&d=123&e=true";
let obj1=qs.parse(str);
console.log(obj1);

let obj2={ a: [ '1', '2' ], b: '2', c: '3', d: '123', e: 'true' }
console.log(qs.stringify(obj2));

let obj3={ a: [ '1', '2' ], b: '2', c: '3', d: '123', e: 'true',f:{a:1} }
console.log(qs.stringify(obj3));


