import React, { Component } from "react";
import ReactTypes from 'prop-types'
import lifePng from '../life.png'


//组件生命周期，执行顺序如下
export default class Lifecycle extends Component {
  //1，生命周期第一步，当父组件没有传递给子组件相应的props值时，设置默认传递的值如下
  static defaultProps = {
    name:'default name',
    age:0
  }


  //1，生命周期第一步，限定传递的值的类型    1,安装npm install prop-types --save    2,引入  import ReactTypes from 'prop-types'
  static propTypes = {
    name:ReactTypes.string ,     
    age:ReactTypes.number
  }


  // 2，生命周期第二步，初始化构造函数
  constructor(props) {
    super(props);
    // 常用于初始化状态
    console.log("2.组件构造函数执行");
    this.state = {
      btnContext:'天王盖地虎'
    }
  }
  
  
  //3,生命周期第三步，将要挂载, 此时可以访问状态和属性，可进行api调用等
  componentWillMount() {
    console.log("3.组件将要挂载");
  }

  //4，组件渲染
  render() {
    console.log("4,组件渲染");
    return <div>
      <h4 id="title">生命周期探究</h4>
      <img src={lifePng} style={{width:"100px" }}   />
      <p><label  ref="lab">来自你组件的数据</label><span>{this.props.name} ---{this.props.age & this.props.age }</span></p>
      <button ref="btn">改变值</button><span>{this.state.btnContext}</span>
      <hr/>
    </div>;
  }

  //5, 组件已挂载,html已渲染完毕，可进行状态更新操作，dom操作
  componentDidMount() {
    console.log("5.组件已挂载");
    //原生的dom操作
    document.getElementById('title').innerHTML = '更新-生命周期探究'
    //react的dom操作  在元素上添加ref属性，取值用this.refs.refValue  获取到相应的dom对象
    this.refs.lab.innerHTML = '';

    //事件
    this.refs.btn.addEventListener('click',(e)=>{
      //改变组件状态,setState,异步过程
       this.setState({
        btnContext:this.state.btnContext+'  宝塔镇河妖'
       })
    })
  }

  //6-1  组件内部是否需要更新(也就是setState改变了状态值，触发更新)，需要返回布尔值结果，true,更新;false,不更新。
  shouldComponentUpdate(nextProps,nextState) {
    console.log("6-1  组件内部是否需要更新?");
    console.log(this.state.btnContext);  //这里是还是未更新之前的值
    console.log(nextProps);    //这个是更新后的props值 
    console.log(nextState);    //这个是更新后的state值
    return false;              //返回true则触发更新，false,则不触发更新
  }

  //6-2  父组件传递的属性有变化，做相应响应 ,从而触发shouldComponentUpdate组件内部的更新，返回true则更新，false则不更新
  componentWillReceiveProps(nextProps) {
    console.log("6-2 父组件传递的属性有变化，做相应响应");
    console.log(nextProps);
  }

  // 7 组件将要更新,重新执行render页面，完成后才执行componentDidUpdate
  componentWillUpdate() {
    console.log("7.组件将要更新");  // 组件将要更新，可做更新统计
  }

  //8 组件已更新完毕
  componentDidUpdate() {
    console.log("8.组件已更新");   // 组件更新
  }

  //9 组件将要卸载, 可做清理工作
  componentWillUnmount() {
    console.log("9.组件将要卸载, 可做清理工作");
  }
  
}
