import * as types from './types'
const reducer=(state,{type,payload})=>{
    switch(type){
        case "SUM":
            if(state.buyCar.length!=0){
                let sum=0;
                for(var i=0;i<state.buyCar.length;i++){
                    sum+=(state.buyCar[i].number*state.buyCar[i].price);
                }
                return Object.assign({},state,{sum:sum,num:state.buyCar.length})
            }else{
                return state;
            }
        case types.FOOT_VIEW:
            return Object.assign({},state,{bFoot:payload});
        case types.CLEAR_DATA:
            return Object.assign({},state,{homeData:[],goodsData:[]});
        case types.LOADING_VIEW:
            return Object.assign({},state,{bLoading:payload});
        case types.UPDATE_HOME:
            return Object.assign({},state,{homeData:payload})
        case types.UPDATE_GOODS:
            return Object.assign({},state,{goodsData:payload});
        case types.ADD_ITEM:
            let find=false;
            let sum=0;
            state.buyCar.forEach(item => {
                if(payload.id===item.id){
                    find=true;
                    item.number++;
                    for(var i=0;i<state.buyCar.length;i++){
                        sum+=(state.buyCar[i].number*state.buyCar[i].price);
                    }
                }
            });
            if(!find){
                payload.number=1;
                state.buyCar.push(payload)
                for(var i=0;i<state.buyCar.length;i++){
                    sum+=(state.buyCar[i].number*state.buyCar[i].price);
                }
            }
            return Object.assign({},state,{buyCar:[...state.buyCar],sum:sum,num:state.buyCar.length})
        case types.REMOVE_ITEM:
            let som=0
            if(payload.number==1){
                var a = state.buyCar.indexOf(payload)
                state.buyCar.splice(a,1);
                for(var i=0;i<state.buyCar.length;i++){
                    som+=(state.buyCar[i].number*state.buyCar[i].price);
                }
            }else{
                var a = state.buyCar.indexOf(payload)
                state.buyCar[a].number--;
                for(var i=0;i<state.buyCar.length;i++){
                    som+=(state.buyCar[i].number*state.buyCar[i].price);
                }
            }
            return Object.assign({},state,{buyCar:[...state.buyCar],sum:som,num:state.buyCar.length});
        case types.REMOVE_ALL:
            return Object.assign({},state,{buyCar:[],sum:0,num:0});
        case types.REGISTER:
            // for(var key in payload){
            //     state.login.forEach((val)=>{
            //         if(val[key]){
            //             alert("用户名已存在");
            //             return state;
            //         }
            //     })
            //     return state;
            // }
            alert("注册成功");
            return Object.assign({},state,{login:state.login.concat(payload)});
        case types.LOGIN:
            let key="";
            let value="";
            for(var i in payload){
                key=i;value=payload[i];
            }
            for(var i=0;i<state.login.length;i++){
                if(state.login[i][key]){
                    if(state.login[i][key]==value){
                        alert("登陆成功")
                        return Object.assign({},state,{onoff:true})
                    }else{
                        alert("密码错误")
                        return state
                    }
                }
            }
            alert("用户名或密码有误")
            return state;
        default:
            return state;
    }
}
export default reducer;