import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//组件名称必须以大写字母开头。
//否则,React 会将以小写字母开头的组件视为原生 DOM 标签

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
