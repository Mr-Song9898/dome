import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default class BusinessTitle extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="top_c">
                    <NavLink to="/home" className="iconfont icon-jiantou-copy-copy"></NavLink>
                    <a href="#" className="shou">
                        <span className="iconfont icon-shoucang"></span>
                        <span className="iconfont icon-shoucang1"></span>
                    </a>
                    <p className="titi">百佳超级市场</p>
                </div>
                <div className="pos">
                    <div className="container">
                        <div className="row titll"> 
                            <NavLink to="/business/businessGoods" className='col-xs-4 sp_s'>商品</NavLink>
                            <NavLink to="/business/businessPing"  className='col-xs-4 sp_p'>评价</NavLink>
                            <NavLink to="/business/businessShop" className='col-xs-4 sp_j'>商家</NavLink>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}