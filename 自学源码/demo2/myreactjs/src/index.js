// import React from 'react';
// import ReactDOM from 'react-dom';
import React from './vdom'
let ReactDOM = React;

let element = <div>
        <h4 id="app">开课吧</h4>
        <p>全栈工程师</p>
        hellow
</div>

console.log(element);

ReactDOM.render(element,document.getElementById('root'));
