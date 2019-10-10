/**
 * json to  querystring
 * { a: [ '1', '2' ], b: '2', c: '3', d: '123', e: 'true' }  to  "a=1&a=2&b=2&c=3&d=123&e=true"
 */
export function stringify(obj){
    if(Object.prototype.toString.call(obj) !='[object Object]'){
        throw new Error("param must be an object")
    }
    try{
        let result="";
        for(let key in obj){
            if(Object.prototype.toString.call(obj[key]) =='[object Array]'){ //is array
                obj[key].forEach(v=>{
                    result+=key+"="+v+"&";
                })
            }else if(Object.prototype.toString.call(obj[key]) =='[object Object]'){
                throw new Error("param object can't include obejct")
            }else{
                obj[key]=obj[key].toString();
                result+=key+"="+obj[key]+"&";
            }
        }
        return result.slice(0,-1);
    }catch(err){
        throw err
    }
}