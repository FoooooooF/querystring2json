/**
 * querystring to json
 * "a=1&a=2&b=2&c=3&d=123&e=true" to  { a: [ '1', '2' ], b: '2', c: '3', d: '123', e: 'true' }
 */
let str="a=1&a=2&b=2&c=3&d=123&e=true"
function parse(str){
    let result={};
    let s1=str.split("&");
    
    s1.forEach((v,i)=>{
        let res= v.split("=");
        if(!result[res[0]]){ //key不存在
            result[res[0]]=res[1];    
        }else if(result[res[0]] instanceof Array){ //result key为数组
            result[res[0]].push(res[1]);
        }else{ //result key 已存在 且不为数组
            result[res[0]]=[result[res[0]],res[1]]
        }
    })
    return result;
}
console.log(parse(str));