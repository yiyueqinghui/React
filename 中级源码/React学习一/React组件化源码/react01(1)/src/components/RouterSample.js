import React, { Suspense,lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, HashRouter, useParams, useRouteMatch } from "react-router-dom"

const Setting = lazy(() => import('./Setting'));

export default class RouterSample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        
        return <div>
            <h4>react路由</h4>
            <h6>react-router-dom 使用教程</h6>
            <ol>
                <li>安装  npm install react-router-dom --save </li>
                <li><a href="https://reacttraining.com/react-router/web/example/basic">使用参考链接</a></li>
            </ol>

            <ul>
                <Router>
                    <Link to='/'><span className="jump">首页</span></Link>
                    <Link to='/setting'><span className="jump">设置</span></Link>
                    <Suspense fallback={<div>loading......</div>} >
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/setting" component={Setting} ></Route>    {/* Setting采用了懒加载 */}
                        </Switch>
                    </Suspense>
                </Router>

                {/* <h3>Hash路由</h3>
                <HashRouter>
                    <Link to='/'><span className="jump">首页</span></Link>
                    <Link to='/my'><span className="jump">个人中心</span></Link>
                    <Link to='/setting'><span className="jump">设置</span></Link>

                    <Switch>
                        <Route path="/" exact component={Home} ></Route>
                        <Route path="/my" component={My} ></Route>
                        <Route path="/setting" component={Setting}  ></Route>
                    </Switch>
                </HashRouter> */}
            </ul>


            <h4 style={{ marginTop: "200px" }} >路由的实现方式, <a href="https://blog.csdn.net/u014298440/article/details/87467056">参考链接</a></h4>

            <ol>
                <li>
                    <h6>利用监控锚点的变化实现前端路由思路,<a href="hash.html">参考链接</a></h6>
                    <p>
                        是通过锚点来改变浏览器的URL，体现在URL后面会加上#，并且可以通过window.onhashChange来监听这一变化，
                        从而我们可以建立好hash值和对应回调函数的映射关系，
                        然后可以通过点击a标签，实现在不刷新页面情况下，通过ajax发送请求获取异步数据来改变页面的结构。
                    </p>
                    <dl>
                        <dd>优点---实现方式较为简单，有现成的hashChange来监听路由哈希变化，兼容性较好，大部分浏览器支持</dd>
                        <dd>缺点---'#'不太美观；由于Hash对于服务端来说是不可见的，所以对于SEO不友好</dd>
                    </dl>

                </li>
                <li>
                    <h6>利用History具体实现前端路由思路 <a href="history.html">参考链接</a></h6>
                    首先路由的切换可能由这么几个行为引起，我们需要做不同的处理。
                    <dl>
                        <dd>
                            点击a链接<br />
                            这种方式只需要在他的onclick事件先阻止他的默认跳转行为，然后获取他的url，
                            调用pushState/replaceState改变URL，然后根据url和回调函数的映射关系，触发相应的动作
                        </dd>
                        <dd>
                            直接在脚本中调用pushState/replaceState
                        </dd>
                        <dd>
                            点击浏览器的前进/后退按钮，这里需要用到另一个事件，onpopState，
                            当激活浏览器历史记录时会被触发，注意这个事件不会被pushState/replaceState触发，这个事件回调会可以获取到当前路由下
                            我们之前通过pushState/replaceState存入的信息，也可以拿到url信息，然后根据映射关系去执行回调。
                        </dd>
                    </dl>

                    {/* 后退一个记录window.history.back()    前进一个记录window.history.forward() 
                    <br/>
                    跳转第n次记录 window.history.go(n) 。 window.history.go(-1) 相等于 window.history.back(),
                    window.history.go(1) 相等于 window.history.forward(), window.history.go(0) 相等于 刷新
                    <br/>
                    pushState() 用于向history对象添加当前页面的记录，并且改变浏览器地址栏的URL。
                    <br/>
                    onpopstate事件，该事件在窗口历史记录改变时被触发。 */}

                </li>
            </ol>
        </div>
    }
}



function Home() {
    return <div>
        Home
    </div>
}




