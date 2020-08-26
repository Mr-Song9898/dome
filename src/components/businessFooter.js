import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
class BusinessFooter extends React.Component{
    constructor(props){
        super()
        props.compute()
    }
    render(){
        return(
                <div className="footer">
                    <NavLink to="/business/BusinessCar" className="iconfont icon-iconfontgouwuche">
                        <i>{this.props.num}</i>
                    </NavLink>
                    <div className="jia">
                        <p>总计：<em>￥{this.props.sum}</em></p>
                        <span>配送费 ￥20.00</span>
                    </div>
                    <a href="#" className="jie">结算</a>  
                </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        sum:state.sum,
        num:state.num
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        compute:()=>{dispatch({type:"SUM",payload:""})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BusinessFooter)