import React from 'react';

class TodoItem extends React.Component {
    constructor(props){ 
        super(props);

        this.delete = this.delete.bind(this);
    }

    delete(){
        this.props.delete(this.props.index);
    }

    render(){
        const {content} = this.props;
        return ( 
            //如果实在不想在外层包裹一个div,可用 React.Fragment代替 ，
            //这样解析后就这里的外层就不存在div了，直接就是父组件的内容了
        //    <div>
              <React.Fragment>
                 {/* React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同:
                   1,React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
                   2,使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。 */}
                  <li onClick={this.delete}>{content}</li>
              </React.Fragment>
        //    </div>
        )
    }
}

export default TodoItem;