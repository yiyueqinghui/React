import React from 'react'
import PropTypes from 'prop-types'

// react16之后的context方法步骤如下  1.1
const { Provider,Consumer } = React.createContext()

export default class TopParent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'yiyueqinghui',
            age:30
        }
    }

    // react16之前的childContextType老方法步骤如下: 2.1
    getChildContext(){
        return {
            name:this.state.name,
            age:this.state.age
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:'duzuiliunian',
                age:31
            })
        },6000)
    }

    render(){
        return <div>
            <h4>react16之前的childContextType</h4>
            <p>{this.state.name}  {this.state.age}</p>
            <hr/>
            {/* 2.2 在父(祖先)级组件中, 用Provider把要传递东西的后代组件包起来, 要传递的东西放进value里面, value是一个对象, 所以看着像双括号语法, 其实不是. */}
            <Provider value={{name:this.state.name,age:this.state.age}} >
                <Son />
            </Provider>
           
            
        </div>
    }
}

class Son extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return <div>
            <GrandSon1 />
            <hr/>
            <GrandSon2 />
        </div>
    }
}

function GrandSon1(){
  return <div>
          <h4>孙子组件1</h4>
          <b>react16及其之后的context方法</b>
          <p><b>来自祖级组件的内容</b> </p>
          {/* 2.3 后代组件中的组件放在Consumer里面, 内部是一个函数, 这个函数接受一个对象作为参数, 参数是Provider里面提供的值. 然后直接使用就可以了. */}
          <Consumer>{ (value)=> <div>newContext {value.name} {value.age} </div> }</Consumer>
  </div>

}

class GrandSon2 extends React.Component {
    render(){
        return <div>
            <h4>孙子组件2</h4>
            <p><b>react16之前的childContextType</b></p>
            {/* 2.4   直接使用即可this.context.相应的值 */}
            <p><b>来自祖级组件的内容</b> { this.context.name }</p>    
        </div>
    }
}

//2.3  需要接收祖组件context内容的孙子组件，定义需要接收的数据类型（可选择性接收）
GrandSon2.contextTypes = {
    name:PropTypes.string,
}


//2.2  祖组件 定义context数据类型
TopParent.childContextTypes = {
    name:PropTypes.string,
    age:PropTypes.number
}