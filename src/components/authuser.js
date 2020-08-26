import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux"

class Authuser extends Component{
    constructor(){
        super();
        this.state={
            hasauth:false,
            auth:false,
        }
    }
    componentDidMount(){
        fetch('./data/auth.json').then(res=>res=res.json()).then(data=>this.setState({hasauth:true,"auth":data[0].auth}))
    }
    render(){
        let {component:Component,...rest}=this.props;
        if(!this.state.hasauth) return null;
        return(
            <Route {...rest}
            render={(props)=>(
                this.props.onoff?
                <Component {...props}/>:
                <Redirect to="/login"/>
            )}
            />
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        onoff:state.onoff
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(Authuser);