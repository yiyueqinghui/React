// import "../css/index.css"
import {add} from './a.js'
import {sub} from './b.js'


add(1,3);
sub(2,5);

//es6 语法 转 es5语法
var obj = {
    name:'cj'
}
var obj1 = {
    age:28
}
var obj2 = {...obj,...obj1}
console.log(obj2);

var func = ()=>{
    console.log('function')
}


// class Preson{
//     static info = {name:'sy',age:22}
// }
// console.log(Preson.name)

