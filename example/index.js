/**
 * node中使用
 * node 中建议直接使用原生 querystring模块
 */

const qs =require("../lib/index.js");

let str="a=1&a=2&b=2&c=3&d=123&e=true";
let obj=qs.parse(str);
console.log(obj);
console.log(qs.stringify(obj));


