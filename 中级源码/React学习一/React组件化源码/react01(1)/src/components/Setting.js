import React from "react"
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom"

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log();
        let { url } = this.props.match;
        //路由嵌套
        //useRouteMatch() 获取路由match  ,如果是父子组件的关系，参数则在props中
        return <div>
            <ul>
                <li><Link to={`${url}/one`} >设置一</Link></li>
                <li><Link to={`${url}/two`}>设置二</Link></li>
            </ul>

            <Switch>
                <Route path={`${url}/:id`}>  <SettingCheck /> </Route>
                <Route path={`${url}`} >please checked</Route>
            </Switch>
        </div>
    }
}


//路由传参
//useParams() 获取路由中传递过来的参数对象
function SettingCheck() {
    let { id } = useParams();
    return <div>
        {id}
    </div>
}

