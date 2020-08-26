import * as types from './types'
const asyncAction=(url,dispatch,type)=>{
    dispatch({type:types.LOADING_VIEW,payload:true});
    dispatch({type:types.CLEAR_DATA,payload:""});
    setTimeout(()=>{
        fetch(url).then(res=>res.json()).then(
            payload=>{
                // console.log(payload)
                dispatch({type:types.LOADING_VIEW,payload:false});
                dispatch({type,payload})
            }
        )
    },300)
};
export default asyncAction;