import React from 'react';
import '../assets/css/font_jvc3xp5ob1uac3di.css';
import ReactSwipe from 'react-swipe';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import asyncAction from '../store/action';
import * as types from '../store/types'

import fillzero from '../comment/fillzero';
import date from '../comment/date';

class Home extends React.Component{
    componentDidMount(){
        this.props.updataHome('/data/home.json')
    }
    render(){
        return(
            <div className="home">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-1"></div>
                            <div className="col-xs-9">
                                <a href="#" className="local">
                                    <span className="loc_d">山东省济南市...</span>
                                    <span className="glyphicon glyphicon-triangle-bottom"></span>
                                </a>
                            </div>
                            <div className="col-xs-2">
                                <a href="search.html" className="search">
                                    <span className="iconfont icon-sousuo01"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="carousel-example-generic" className="carousel slide banner" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <ReactSwipe className="carousel-inner carousel" role="listbox" swipeOptions={{continuous: true,auto:2000}}>
                        <div className="item active">
                        <img className="img-responsive big" src="./assets/images/f768dc6225a8e38b04eaf96e04988b1e.jpg"/>
                        </div>
                        <div className="item">
                        <img className="img-responsive big" src="./assets/images/415CA6B861A3221C5D1E196B182BF48C.png"/>
                        </div>
                        <div className="item">
                        <img className="img-responsive big" src="./assets/images/sdf.jpg"/>
                        </div>
                    </ReactSwipe>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="hot">
                    <div className="container">
                        <div className="title">
                            <hr/>
                            <h4>热卖推荐</h4>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-xs-5">
                                <a href="#" className="sp">
                                    <img src="./assets/images/454554.jpg"/>
                                    <p>9期免息/送8重礼 Apple/苹果 iPhone 6 32G 全网通国行...</p>
                                    <span>￥<em>3399.00</em></span>
                                </a>
                            </div>
                            <div className="col-xs-7">
                                <div className="sp_1">
                                    <a href="#">
                                        <img src="./assets/images/787554.jpg"/>
                                        <div>
                                            <p>iPhone6数据线苹果6s二合一拖7plus伸缩5s</p>
                                            <span>￥<em>29.00</em></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="sp_1 sp_11">
                                    <a href="#">
                                        <img src="./assets/images/sf4.jpg"/>
                                        <div>
                                            <p>英国jellycat小男孩幼儿童女孩Cordy Roy大象毛绒玩具</p>
                                            <span>￥<em>145.00</em></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="wrapper" className="nav_s">
                    <div className="scroll">
                        <a href="#" className="currer">商超</a>
                        <a href="#">建材</a>
                        <a href="#">家居</a>
                        <a href="#">服装</a>
                        <a href="#">宾馆</a>
                        <a href="#">母婴</a>
                        <a href="#">医院</a>
                        <a href="#">美食</a>
                    </div>
                </div>


                <div className="product">
                    {this.props.homeData.map((val,index)=>{
                        return (
                            <div className="sp_pr" key={index}>
                                <NavLink to="/business">
                                    <img src={val.src}/>
                                    <div className="text_p">
                                        <p>{val.title}</p>
                                        <div className="xing">
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                        </div>
                                        <span className="yue">月销量<em>{val.num}</em>件</span>
                                        <span className="yue">起送价<em className="em_s">￥{val.price}</em>配送<em>￥20</em></span>
                                    </div>
                                    <div className="jul">{val.length}</div>
                                </NavLink>     
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        homeData:state.homeData,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updataHome:(url)=>{asyncAction(url,dispatch,types.UPDATE_HOME)}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)