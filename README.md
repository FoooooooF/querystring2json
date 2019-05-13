# querystring to json 
    querystring to json & json to querystring
    
## use in script
- import index.js
``` javascript
    <script src="./lib/index.js"></script>

```
- example
``` javascript
    //parse
    let str="a=1&a=2&b=2&c=3&d=123&e=true"
    let obj=qs.parse(str);

    //stringify
    let obj={ a: [ '1', '2' ], b: '2', c: '3',d:123,e:true };
    let str=qs.stringify(obj);
```


##  use in node
- example
``` javascript
    const qs =require("../lib/index.js");
    let str="a=1&a=2&b=2&c=3&d=123&e=true";
    let obj=qs.parse(str);
    console.log(obj);
    console.log(qs.stringify(obj));
```