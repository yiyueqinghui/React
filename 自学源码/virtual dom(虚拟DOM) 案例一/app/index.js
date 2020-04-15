import 'styles/index.scss';


/*
文字说明
    1,virtual dom(虚拟DOM)的核心---> 数据对比

   


*/

function dom(type,props,...children){
    return {
        type,
        props,
        children
    }
}

//生成真实的dom
function generateDom(domObj){
    let $el;
    if(domObj.type){     
        //如果有元素类型type,则创建相应元素
        $el = document.createElement(domObj.type);
    }else{
        //如果没有，则创建文本node
        $el = document.createTextNode(domObj);
    }

    //添加相应的属性
    if(domObj.props){
        Object.keys(domObj.props).forEach((key)=>{
            $el.setAttribute(key,domObj.props[key])
        })
    }

    //添加相应的子元素
    if(domObj.children){
        domObj.children.forEach(child=>{
          $el.appendChild(generateDom(child))
        })
    }

    return $el;


}

//对比dom是否发生变化
function isNodeChange(node1,node2){    
   if(node1.type !== undefined && node2.type !== undefined){   
       return node1.type !== node2.type;    //这个主要是判断tag是否发生了变化，如果tab改变，则删除旧dom,新增新dom
   }

   return node1 !== node2;
}

 //获取数据类型
 const types = {
    get:(type)=>Object.prototype.toString.call(type),
    string:'[object String]',
    number:'[object Number]',
    boolean:'[object Boolean]',
    function:'[object Function]',
    array:'[object Array]',
    object:'[object Object]',
    null:'[object Null]',
    undefined:'[object Undefined]',
}

//对象属性props是否发生改变
function isObjectChanged(obj1,obj2){
   //判断数据类型是否一致,因为没有props时，为null
   if(types.get(obj1) !== types.get(obj2) ){

   }

   //深入对比
   if(types.get(obj1) === types.object){
       const obj1Keys = Object.keys(obj1);
       const obj2Keys = Object.keys(obj2);

       if(obj1Keys.length !== obj2Keys.length){
           return true;
       }

       //两个都是null
       if(obj1Keys.length === 0){
           return false;
       }

       for(var i=0; i < obj1Keys.length; i++){
           let key = obj1Keys[i];
           if(obj1[key] !== obj2[key]){
               return true;
           }
       }
   }

   return false;


}


//对比dom
function vDom($parent,oldNode,newNode,index=0){
    const $currentNode = $parent.childNodes[index];
    if(!oldNode){
        //append dom
       return $parent.appendChild(generateDom(newNode))
    }

    if(!newNode){
        //delete dom
        return $parent.removeChild($currentNode)
    }

    //oldNode,newNode都有值，需要深入对比
    if(isNodeChange(oldNode,newNode)){
       return $parent.replaceChild(generateDom(newNode),$currentNode);    //使用新的dom替换旧的dom
    }

    //两者同样的字符串
    if(oldNode === newNode){
        return;
    }

    //对比props  更新
    if(isObjectChanged(oldNode.props,newNode.props)){
        const oldProps = oldNode.props || {};
        const newProps = newNode.props || {};
        const oldPropsKeys = Object.keys(oldProps);
        const newPropsKeys = Object.keys(newProps);

        if(newPropsKeys.length === 0){
            oldPropsKeys.forEach(prop=>{
                $currentNode.removeAttribute(prop);
            })
        }else{
            const allKeys = new Set([...oldPropsKeys,...newPropsKeys]);      

            allKeys.forEach(prop=>{
                //没有old props,则设置相应props
                if(oldProps[prop] === undefined){
                    return $currentNode.setAttribute(prop,newProps[prop]);
                }

                //没有new props,则移除相应的props
                if(newProps[prop] === undefined){
                    return $currentNode.removeAttribute(prop);
                }

                //对比值是否一致
                if(oldProps[prop] !== newProps[prop]){
                    return $currentNode.setAttribute(prop,newProps[prop]);
                }
            })
        }
    }



    //两者不同
    if( (oldNode.children && oldNode.children.length) || (newNode.children && newNode.children.length)){
        let maxLength = Math.max(oldNode.children.length,newNode.children.length);
        for(let i = 0; i < maxLength; i++){
            vDom($currentNode,oldNode.children[i],newNode.children[i],i)
        }
    }


}

const previous = null;
const current = <div class="profile" title="titles">
    <div>
        <div>
            <p>
                <h1 class="title" >hellow world!</h1>
            </p>
        </div>
    </div>
</div>
const changeProps = <div class="profile_active">
    <div>
        <div>
            <p>
                <h4 class="title_active" data-title="new title">welcom Tony,hellow world!</h4>
            </p>
        </div>
    </div>
</div>

const $app = document.querySelector('.app');

vDom($app,previous,current);    //添加dom

const nodeChange = <section>change node tag!</section>;
const childChange = <div class="profile" title="titles"><p><h4>change childNode</h4></p></div>
setTimeout(()=>{
    // vDom($app,current,null);    //移除相应的dom

    // vDom($app,current,nodeChange);    //type发生变化

    // vDom($app,current,childChange);      //改变子元素

    vDom($app,current,changeProps);     //props发生变化
},5000)







// const profile = <div id="profile" data-user-id="1"><p>Tony</p></div>
// {
//     type:'div',
//     props:{
//         'id':'profile',
//         'data-user-id':'1'
//     },
//     children:[
//         {
//             type:'p',
//             props:null,
//             children:[
//                 'Tony'
//             ]
//         }
//     ]
// }

