const defaultState = {
    inputVal:'',
    list:[]
}

const reducers = (state = defaultState,action)=>{
    var newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'change_val'){
        console.log('store仓库中接收到了要更新的值');
        newState.inputVal = action.value;
        return newState;
    }else if(action.type === 'add_todo'){
        newState.list.push(state.inputVal);
        newState.inputVal = '';
        return newState;
    }
    return state;
}

export default reducers;