import React from 'react';
import TodoList from './page/TodoList.js'
import MouseAndFinger from './page/mouseAndFinger.js'
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
    }
    // 创造一个 textInput DOM 元素的 ref
    this.textInput = React.createRef();
  }
  
  //生命周期  挂载时
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.lock();
    },1000)
    this.textInput.current.focus();
  }

  //生命周期  即将销毁时
  componentWillUnmount(){
    clearInterval(this.timer);
  }



  lock(){
    this.setState({
      date:new Date()
    })

   //出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。所以State 的更新可能是异步的
   //因此,this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

    //错误写法
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });


    //要解决更新异步这个问题，可以让 setState() 接收一个函数而不是一个对象。
    //这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
    
    //正确写法
    // this.setState((state, props) => {
    //   return { 
    //     counter: state.counter + props.increment
    //   } 
    // });
  }

  render(){ 
    return (            
      <div className="App">  
         <h4>{this.state.date.toLocaleTimeString()}</h4>
         <hr/>
         <TodoList/> 
         <hr/>
         <form>
           <label htmlFor="namedInput">Name:</label>
            {/*管理焦点:初始化input输入框获取焦点时，使用 `ref` 回调函数以在实例的一个变量中存储文本输入 DOM 元素
           （比如，this.textInput）。 */}
           <input id="namedInput" type="text" ref={this.textInput} name="name"/>
           <input type="button"  value="submit" />
         </form>
         <hr/>
         <MouseAndFinger/>
         <hr/>
         
         
         
     </div>
    )
  }  
}

export default App;
