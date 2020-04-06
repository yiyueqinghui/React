import React from 'react'
import { List,Typography,Input,Button } from 'antd';
import 'antd/dist/antd.css';
import Store from '../store/index'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export default class ReduxSample extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          ...Store.getState()     //获取仓库中的数据，并赋值给状态
        }

        this.changeVal = this.changeVal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTodoList = this.addTodoList.bind(this)

        //监听store值的变化，触发组件中的事件从而来更新组件的状态
        Store.subscribe(this.handleChange)

    }

    changeVal(e){
        const action = {
            type:'change_val',
            value:e.target.value
        }
        //更新仓库中的值，触发reducer.js中的方法
        Store.dispatch(action);
    }

    addTodoList(){
        Store.dispatch({
            type:'add_todo'
        })
    }

    handleChange(){
        console.log('组件中更新了状态')
        this.setState(Store.getState());
    }

    render(){
        return (
            <div>
                <div>
                    {/* antd的使用 */}
                   <Input placeholder="Basic" onChange={this.changeVal}  value={this.state.inputVal} style={{width:'300px'}} />
                   <Button onClick={this.addTodoList} type="primary" >增加</Button>
                   <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                           {item}
                        </List.Item>
                    )}
                    />
                </div>
                



                <h3 style={{marginTop:'200px'}}>Redux学习</h3>
                <ol>
                    <li>安装redux  <br/>  npm install redux --save</li>
                    <li>
                        使用仓库，<a href="https://www.redux.org.cn/">参考</a>
                    </li>
                </ol>
            </div>
        )
    }
}