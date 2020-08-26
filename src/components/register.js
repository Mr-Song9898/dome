import React from 'react'
import '../assets/css/font_6688xdquixljif6r.css';
import {REGISTER} from '../store/types';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom"
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            pass:"",
            onoff:props.onoff,
        }
        this.change1=this.change1.bind(this)
        this.change2=this.change2.bind(this)
    }
    change1(ev){
        // console.log(ev.target.value)
        this.setState({
            name:ev.target.value
        })
    }
    change2(ev){
        // console.log(ev.target.value)
        this.setState({
            pass:ev.target.value
        })
    }
    render(){
        return(
            <div>
                <div className="top_c">
                    <NavLink to="/login" href="javascript:;" className="iconfont icon-jiantou-copy-copy" ></NavLink>
                    <p className="titi">注册</p>
                </div>
                <div className="login">
                    <div className="container">
                        <div className="zhu">
                            <div className="ru">
                                <input type="text" name="address" placeholder="请输入用户名" value={this.state.name} onChange={this.change1}/>
                            </div>
                            <div className="ru">
                                <input type="text" name="address" placeholder="请输入密码" value={this.state.pass} onChange={this.change2}/>
                            </div>
                            {/* <div className="ru">
                                <input type="text" name="address" placeholder="请输入验证码"/>
                                <div className="yan">
                                    <input type="button" id="btn" className="btn_mfyzm" value="获取验证码" />
                                </div>    
                            </div> */}
                        </div>
                        <NavLink to="/login" href="#" className="deng" onClick={this.props.add.bind(this,this.state.name,this.state.pass)}>免费注册</NavLink>
                        <div className="san">
                            <hr/><span>第三方登录</span><hr/>
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
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        add:(val1,val2)=>{
            // console.log(val1,val2)
            dispatch({type:REGISTER,payload:{[val1]:val2}})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);