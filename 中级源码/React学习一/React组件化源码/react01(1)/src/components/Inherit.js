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
                   <p className="left" style={{width:'50%',float:'left'}}> {this.props.left}</p>
                   <p className="right" style={{width:'50%',float:'right'}}> {this.props.right}</p>
                </div>

            </div>
        )
    }
}
