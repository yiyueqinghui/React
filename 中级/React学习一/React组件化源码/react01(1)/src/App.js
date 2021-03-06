import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Welcome1, Welcome2 } from './components/CompType';
import Clock from './components/Clock';
import StateTest from './components/StateTest';
import CartSample from './components/CartSample';
import Lifecycle from './components/Lifecycle';
import AntdTest from './components/AntdTest';
import CommentList from './components/CommentList';
//import Hoc from './components/Hoc';   //此组件内部的@用法，暂缓
import Composition from './components/Composition';
import Inherit from './components/Inherit'
import CreateReactApp from './components/CreateReactApp'
import RouterSample from './components/RouterSample'
import ReduxSample from './components/ReduxSample'
import RefUse from './components/RefUse'
import TopParent from './components/context/TopParent'


function formatName(user) {
  return user.firstName + " " + user.lastName;
}


function LeftCom(){
  return (
     <ul style={{width:'50%',float:'left'}} >
       <li>PHP</li>
       <li>Java</li>
     </ul>
  )
}

function RightCom(){
  return (
      <ul style={{width:'50%',float:'right'}} >
       <li>Python</li>
       <li>JavaScript</li>
     </ul>
  )
}

class App extends Component {
  state = { 
    name:'some prop',
    lifeProps:{
      name:'July',
      age:25
    }
  }
  componentDidMount(){
    this.setState({name:'a new prop'})

    setTimeout(() => {
      let newLife = Object.assign({},this.state.lifeProps,{name:'modify name'});
      this.setState({
        lifeProps:newLife
      })
    }, 15000);
    
  }
  render() {
    const name = "jerry";
    const user = { firstName: "tom", lastName: "jerry" };
    const jsx = <p>hello, jerry</p>;
    return (
      <div>
        {/* 表达式 */}
        {/* <h1>{name}</h1>
        <h1>{formatName(user)}</h1> */}

        {/* 属性 */}
        {/* <img src={logo} style={{width:'100px'}} /> */}

        {/* jsx也是表达式 */}
        {/* {jsx} */}
        {/* 使用其他组件 */}
        {/* <Welcome1 name="some content"></Welcome1>
        <Welcome2 name="some content"></Welcome2> */}

        {/* State和状态改变setState */}
        {/* <Clock></Clock> */}
        {/* <StateTest></StateTest> */}

        {/* 条件与循环 */}
        {/* <CartSample title="购物车"></CartSample> */}

        {/* 生命周期 */}
        {/* <Lifecycle name={this.state.name}></Lifecycle> */}

        {/* 不传递属性，采用子组件中的默认属性*/}
        {/* <Lifecycle></Lifecycle> */}    

        {/* 多个属性的一次性传递，采用es6的... */}
        {/* <Lifecycle {...this.state.lifeProps} ></Lifecycle> */}

        {/* antd */}
        {/* <AntdTest></AntdTest> */}

        {/* 展示组件和容器组件 */}
        {/* <CommentList></CommentList> */}

        {/* 高阶组件 */}
        {/* <Hoc></Hoc> */}

        {/* 组件复合 */}
        {/* <Composition></Composition> */}

        {/*组件继承,传递组件给子组件  */}
        {/* <Inherit left={ <LeftCom/> } right={ <RightCom/> } >
           <h4>来自父组件的内容</h4>
        </Inherit> */}

        {/*祖孙组件之间数据的传递（React16刚出的createContext,以及16版本之前的childContextType） */}
        <TopParent />

        {/* 脚手架创建过程 */}
        {/* <CreateReactApp/> */}

        {/* react-router-dom 路由的实现原理 */}
        {/* <RouterSample/> */}

        {/* redux 状态管理 */}
        {/* <ReduxSample/> */}

        {/* ref的三种使用方式 */}
        {/* <RefUse /> */}



      </div>
    );
  }
}

export default App;
