import React from 'react'

export default class Inherit extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div>
                hellow world!
                {/* children就是父组件插入到子组件的内容 */}
                {this.props.children}

                {/* 也可以通过属性的方式把组件传递给属性 */}
                <div>
                   {this.props.left}
                   {this.props.right}
                   {/* <div className="left" style={{width:'50%',float:'left'}}> {this.props.left}</div> */}
                   {/* <div className="right" style={{width:'50%',float:'right'}}> {this.props.right}</div> */}
                </div>

            </div>
        )
    }
}
