import React from 'react'
import '../assets/css/font_6688xdquixljif6r.css';
import {connect} from "react-redux"
import {NavLink} from 'react-router-dom';
import {LOGIN} from '../store/types';
// import asyncAction from '../store/action';
class Login extends React.Component{
    constructor(props){
        super();
        this.state={
            name:"",
            pass:"",
            onoff:props.onoff
        }
        this.change1=this.change1.bind(this)
        this.change2=this.change2.bind(this)
    }
    change1(ev){
        this.setState({
            name:ev.target.value
        })
    }
    change2(ev){
        this.setState({
            pass:ev.target.value
        })
    }
    render(){
        return(
            <div>
                
                <div className="top_c">
                    {/* <a href="javascript:window.history.go(-1);" className="iconfont icon-jiantou-copy-copy"></a> */}
                    <NavLink to="/home" href="javascript:;" className="iconfont icon-jiantou-copy-copy"></NavLink>
                        <p className="titi">登录</p>
                </div>
                <div className="login">
                    <div className="container">
                        <img src="../assets/images/sf4.jpg"/>
                        <div className="ru">
                            <span className="iconfont icon-shouji"></span>
                            <input type="text" name="address" size="60" value={this.state.name} onChange={this.change1}/>
                        </div>
                        <div className="ru">
                            <span className="iconfont icon-mima"></span>
                            <input type="password" name="address" size="60" value={this.state.pass} onChange={this.change2}/>
                        </div>
                        <NavLink to="/personal" href="javascript:;" className="deng"  onClick={this.props.add.bind(this,this.state.name,this.state.pass)}>登 录</NavLink>
                        <NavLink to="/register" href="javascript:;" className="wang">免费注册</NavLink>
                        <div className="san">
                            <hr/><span>第三方登录{this.props.onoff&&<div>hello</div>}</span><hr/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-6"><a href="#"><i className="iconfont icon-qq"></i></a></div>
                                    <div className="col-xs-6"><a href="#"><i className="iconfont icon-weixin"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        login:state.login,
        reg:state.reg,
        onoff:state.onoff,
        homeData:state.homeData,
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        add:(val1,val2)=>{
            dispatch({type:LOGIN,payload:{[val1]:val2}})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);