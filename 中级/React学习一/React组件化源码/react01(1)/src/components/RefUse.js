import React from 'react'

export default class RefUse extends React.Component{
   constructor(props){
       super(props)
       this.objRef = React.createRef()   //创建对象,注意获取组件或dom节点时，其挂载在该对象的current属性下，即this.objRef.current
       this.state = {

       }
       

   }

   componentDidMount(){
       setTimeout(()=>{
          this.refs.stringRef.textContent = 'update one'

          console.log(this.methodRef)
          this.methodRef.textContent = 'update two'

          this.objRef.current.textContent = 'UPDATE THREE'   
       },3000)

   }

   render(){
       return <div style={{textAlign:'center'}} >
           <h4>ref的三种使用方式(用来获取dom和组件对象)</h4>
           <p ref="stringRef" >one</p>
           <p ref={ele=>this.methodRef = ele}>two</p>
           <div ref={this.objRef}>three</div>
       </div>
   }

   

}