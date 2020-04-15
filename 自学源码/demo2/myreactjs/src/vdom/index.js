function createElement(type,props,...children){
    delete props.__source;
    return {
        type,
        props:{
            ...props,
            children:children.map(child=>{
               return typeof child === 'object' ? child : createTextElement(child)
            })
        }
    }

}

// 文本类型的虚拟dom的创建
function createTextElement(text){
    return {
        type:'TEXT',
        props:{
            nodeValue:text,
            children:[]
        }
    }
}

function createDom(vdom){
    const dom = vdom.type === 'TEXT' ? document.createTextNode('') : document.createElement(vdom.type);
    
    Object.keys(vdom.props)
          .filter(key=>key!=='children')
          .forEach(name=>{
            dom[name] = vdom.props[name];
          })
}



/**
 * 
 * @param {虚拟dom} vdom 
 * @param {容器} container 
 */
function render(vdom,container){
    
    wipRoot = {
        dom:container,
        props:{
            children: [vdom]
        },
        base,currentRoot
    }

    nextUnitOfWork = wipRoot

    // vdom.props.children.forEach(child=>{
    //     render(child,dom);
    // })

    // container.appendChild(dom)


}


function commitRoot(){
    commitWorker(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}

function commitWorker(fiber){
    if(!fiber){
        return
    }
    const domParent = fiber.parent.dom
    domParent.appendChild(fiber.dom)
    commitWorker(fiber.child)
    commitWorker(fiber.sibling)
}




//下一个单元任务
let nextUnitOfWork = null

//保存真实的dom
let wipRoot = null
let currentRoot = null

//调用我们的diff或者渲染任务
function workloop(deadline){
    // 有下一个任务，并且当前帧还没有结束
   while(nextUnitOfWork && deadline.timeRemaining()>1){
       nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
   }

   //没有任务了，并且根节点还在
   if(!nextUnitOfWork && wipRoot){
      commitRoot()
   }
   requestIdleCallback(workloop)
}

//启动空闲时间渲染
requestIdleCallback(workloop)


function reconcileChildren(wipFiber,elements){
     //构建fiber结构
   let index = 0;
   let prevSlibing = null;
   while(index<elements.length){
       let element = elements[index]
       const newFiber = {
           type:element.type,
           props:element.props,
           parent:wipFiber,
           dom:null
       }
       if(index == 0){
        //第一个元素，是你fiber的child属性
        wipFiber.child = newFiber
       }else{
        // 其它是是以兄弟
        prevSlibing.slibing = newFiber
       }

       prevSlibing = wipFiber
       index++
       //fiber树构建完成
   } 


   

}

/**
 * 
 * @param {*} fiber {
 *    dom:真实dom,
 *    parent:父亲，
 *    child:第一个子元素，
 *    slibing:兄弟
 * }
 */
//根据当前的任务，获取下一个任务
function performUnitOfWork(fiber){
   if(!fiber.dom){
    //不是入口
    fiber.dom = createDom(fiber)
   }

   //真实的dom
//    if(fiber.parent){
//        fiber.parent.dom.appendChild(fiber.dom)
//    }
   const elements = fiber.props.children
   reconcileChildren(fiber,elements)

   //找下一个任务
   //先找子元素
   if(fiber.child){
    return fiber.child
}

    //如果没有子元素，就找兄弟元素
    let nextFiber = fiber
    while(nextFiber){
        if(nextFiber.slibing){
            return nextFiber.slibing
        }
        //没有兄弟元素，找你元素
        nextFiber = newFiber.parent

    }

}




export default {
    createElement,
    render
}