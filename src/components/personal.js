import React from 'react'
import '../assets/css/font_6yxmrwgmg7kl0udi.css'
export default class Personal extends React.Component{
    render(){
        return(
            <div>
                <div className="zhang">
                    <div className="container">
                        <div className="xiao">
                            <a href="#"><span className="iconfont icon-xiaoxi"><i></i></span></a>
                            <a href="#"><span className="iconfont icon-iconfontshezhi"></span></a>
                        </div>
                        <div className="tou_x">
                            <a href="information.html">
                                <div className="iconfont icon-touxiang"></div>
                                <div className="yong">
                                    <p>华富锦大厦</p>
                                    <span>手机号：15425586998</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ding">
                    <div className="one">
                        <div className="container">
                            <a href="order.html">
                                <p className="biao">全部订单<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                                <span className="iconfont icon-qianbao-"><i>12</i></span>
                                <p>待付款</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="iconfont icon-daifahuo1"><i>8</i></span>
                                <p>待发货</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="iconfont icon-daishouhuo"></span>
                                <p>待收货</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="iconfont icon-daipingjia1"></span>
                                <p>待评价</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="iconfont icon-tuikuan"></span>
                                <p>退款/售后</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="lie_y">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-4">
                                <a href="collection.html">
                                    <span className="iconfont icon-shoucang"></span>
                                    <p className="lll">我的收藏</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="footprint.html">
                                    <span className="iconfont icon-zuji1"></span>
                                    <p className="lll">我的足迹</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="recommend.html">
                                    <span className="iconfont icon-tuijian"></span>
                                    <p className="lll">推荐好友</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="address.html">
                                    <span className="iconfont icon-shouhuodizhi"></span>
                                    <p className="lll">收货地址</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="capital.html">
                                    <span className="iconfont icon-iconliushuizijin" ></span>
                                    <p className="lll">资金流水</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="#">
                                    <span className="iconfont icon-shimingrenzheng"></span>
                                    <p className="lll">实名认证</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="#">
                                    <span className="iconfont icon-conpon1"></span>
                                    <p className="lll">代金券</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="#">
                                    <span className="iconfont icon-hongbao"></span>
                                    <p className="lll">红包</p>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="center.html">
                                    <span className="iconfont icon-shangjia"></span>
                                    <p className="lll">商家中心</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}