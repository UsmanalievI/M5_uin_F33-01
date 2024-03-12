const initialState={
    title: 'old title',
    aboutTitle: 'old about title',
    contactTitle: '',
    value: 0
}

export default function reducer(state=initialState, action){
    if(action.type==='change_title'){
        return {...state, title:'new title'}
    }else if (action.type==='change_about_title'){
        return {...state, aboutTitle:'new about title'}
    }else if(action.type==='with_params'){
        return{...state, contactTitle: action.payload}
    }else if(action.type==='from_input'){
        return{...state, contactTitle: action.payload}
    }

    if(action.type=== 'increment'){
        return{...state, value: action.payload+1}
    }else if(action.type==='decriment'){
        return{...state, value: action.payload-1}
    }else if(action.type==='inc_ten'){
        return{...state, value: action.payload+10}
    }else if(action.type==='reset'){
        return{...state, value: 0}
    }
    return state
}