let obj={ a: [ '1', '2' ], b: '2', c: '3',d:123,e:true };
function stringify(obj){
    let result="";
    for(let key in obj){
        if( typeof obj[key] !='object'){ //非对象值都转化为字符串
            obj[key]=obj[key].toString();
            result+=key+"="+obj[key]+"&"
        }else if(obj[key] instanceof Array){ //是数组
            obj[key].forEach(v=>{
                result+=key+"="+v+"&"
            })
        }
    }
    return result.slice(0,-1);
}
console.log(stringify(obj));