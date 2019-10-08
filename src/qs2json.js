/**
 * querystring to json
 * "a=1&a=2&b=2&c=3&d=123&e=true" to  { a: [ '1', '2' ], b: '2', c: '3', d: '123', e: 'true' }
 */
import {trim} from "./utils.js";
export function parse(str){
    let result={};
    let s1=str.split("&");
    s1.forEach((v,i)=>{
        let res= v.split("=");
        if(!result[res[0]]){ //result.key not exist
            result[trim(res[0])]=trim(res[1]);    
        }else if(result[res[0]] instanceof Array){ //result.key is Array
            result[res[0]].push(res[1]);
        }else{ //result.key is  exist and doesn't Array
            result[res[0]]=[result[res[0]],res[1]]
        }
    })
    return result;
}