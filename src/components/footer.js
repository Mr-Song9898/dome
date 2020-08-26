import React from 'react'
import {NavLink,Link} from 'react-router-dom';

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3">
                                <NavLink to="/home" className='dao'>
                                    <i className="iconfont icon-shouye-copy-copy-copy"></i>
                                    <span className="nav_ti">首页</span>
                                </NavLink>
                            </div>
                            <div className="col-xs-3">
                                <NavLink to="/convenience" className='dao'>
                                    <i className="iconfont icon-quanbu"></i>
                                    <span className="nav_ti">便民</span>
                                </NavLink>
                            </div>
                            <div className="col-xs-3">
                                <NavLink to="/wallet" className='dao'>
                                    <i className="iconfont icon-qianbao-"></i>
                                    <span className="nav_ti">钱包</span>
                                </NavLink>
                            </div>
                            <div className="col-xs-3">
                                <Link to="/personal" className='dao'>
                                    <i className="iconfont icon-information"></i>
                                    <span className="nav_ti">个人中心</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}