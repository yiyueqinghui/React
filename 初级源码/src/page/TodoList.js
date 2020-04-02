import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:['learn react' ], 
            inputVal:''
        }

        this.handleChangeVal = this.handleChangeVal.bind(this);
        this.delete = this.delete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }


    handleBtnClick(){
       this.setState({
           list:[...this.state.list,this.state.inputVal],
           inputVal:''
       })
    }

    handleChangeVal(e){
       this.setState({
           inputVal:e.target.value
       })
    }

    delete(index){
        let list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }

    //方法一
    getItemList(){
        return (
            this.state.list.map((item,index)=> {
              return (    
                <TodoItem 
                    delete={this.delete}  
                    key={index} 
                    index={index}  
                    content={item}  
                />
              )
            })
        )   
    }


    render(){
        // 方法二 map方法返回一个新的数组
        let listItem = this.state.list.map((item,index)=>{
            return (
                <TodoItem 
                    delete={this.delete}  
                    key={index} 
                    index={index}  
                    content={item}  
                />
            )
        })

        return (
           <div>
               <div>
                   <input value={this.state.inputVal} onChange={this.handleChangeVal}  />
                   <button style={{color:'#ffffff'}} className='btn' onClick={this.handleBtnClick}>add</button>
               </div>
                <ul>{ this.getItemList() }</ul>
                <hr/>
                <ul>{ listItem }</ul>
                <hr/>
                <ul>
                    {
                         this.state.list.map((item,index)=> {
                            return (    
                              <TodoItem 
                                  delete={this.delete}  
                                  key={index} 
                                  index={index}  
                                  content={item}  
                              />
                            )
                          })
                    }
                </ul>
                {/* 
                    this.map中，如果使用下标index作为key值，若列表项目的顺序发生变化，则页面也会发生变化。
                    所以我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。 
                */}
           </div>
        )
    }
}

export default TodoList;