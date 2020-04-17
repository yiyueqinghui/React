import React from 'react'

export default class RefUse extends React.Component{
   constructor(props){
       super(props)
       this.objRef = React.createRef()   //创建对象,注意获取组件或dom节点时，其挂载在该对象的current属性下，即this.objRef.current
       this.funcRef = React.createRef()
       this.state = {

       }
       

   }

   componentDidMount(){
       setTimeout(()=>{
          this.refs.stringRef.textContent = 'update one'

          console.log(this.methodRef)
          this.methodRef.textContent = 'update two'

          this.objRef.current.textContent = 'UPDATE THREE'  
          
          this.funcRef.current.value = 'from parent value'
       },3000)

   }

   render(){
       return <div style={{textAlign:'center'}} >
           <h4>ref的三种使用方式(用来获取dom和class组件对象)</h4>
           <p style={{color:'red'}}>但是无法获取到通过函数方式创建的组件和通过继承自pureComponent的纯组件,针对函数组件我们可以用React.forwardRef来解决这个问题</p>
           <p ref="stringRef" >one</p>
           <p ref={ele=>this.methodRef = ele}>two</p>
           <div ref={this.objRef}>three</div>
           <hr/>
           <h4>通过React.forwardRef获取函数组件的对象</h4>
           <TargetComponent ref={this.funcRef} / >
       </div>
   }
   
}

const TargetComponent = React.forwardRef((props,ref)=>{
    return <div>
        <input type="text" ref={ref} />
    </div>
})