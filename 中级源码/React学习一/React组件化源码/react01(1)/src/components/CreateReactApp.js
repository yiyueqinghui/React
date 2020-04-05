import React from 'react'

export default class CreateReactApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           clickIndex:-1
        }
    }

    //注意，参数的传递。事件–--this.handleclick.bind(this,要传的参数)
    // 函数--–handleclick(传过来的参数,event) / handleclick(传过来的参数) 
    //理解如下，bind(this) 默认会将当前对象e传递过去，不需要写入，并且位置是所有参数的最后面，所以接收时event也应该放在所有参数的最后面。
    changeColor(index,event){    
      this.setState({
          clickIndex:index
      })
    }

    render(){
        return <div>
            <h2>create-react-app安装过程</h2>
            <ol>
                <li className={this.state.clickIndex === 0 ?'checked':''} onClick={this.changeColor.bind(this,0)}>安装脚手架    npm install create-react-app -g </li>
                <li className={this.state.clickIndex === 1 ?'checked':''} onClick={this.changeColor.bind(this,1)}>创建工程     create-react-app demoApp(工程名) </li>
                <li className={this.state.clickIndex === 2 ?'checked':''} onClick={this.changeColor.bind(this,2)}>进入项目目录,再运行项目    npm start </li>
            </ol>
        </div>
    }
}