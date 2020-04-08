import 'styles/index.scss';

const profile = <div id="profile" data-user-id="1"><p>Tony</p></div>

{
    type:'div',
    props:{
        'id':'profile',
        'data-user-id':'1'
    },
    children:[
        {
            type:'p',
            props:null,
            children:[
                'Tony'
            ]
        }
    ]
}

