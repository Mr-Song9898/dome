import React from 'react';
import '../assets/css/businessGoods.css';
import {connect} from 'react-redux';
import asyncAction from '../store/action';
import * as types from '../store/types'
class BusinessGoods extends React.Component{
    componentDidMount(){
        this.props.updataGoods('/data/list.json')
    }
    render(){
        return(
            <React.Fragment>
                <div className="lie">
                        <div className="left_c" id="left">
                            <ul>
                                <li><a href="#">生活食品</a></li>
                                <li><a href="#">饮料·水</a></li>
                                <li><a href="#">酒类</a></li>
                                <li><a href="#">休闲零食</a></li>
                                <li><a href="#">厨房调味</a></li>
                                <li><a href="#">粮油副食</a></li>
                            </ul>
                        </div>
                        <div className="right_c" id="right">
                            <ul>
                                {
                                    this.props.goodsData.map((val,index)=>{
                                        return (
                                            <li key={index}>
                                                <a href="javascript:;">
                                                    <img src={val.src} className="sp_b"/>
                                                    <div className="text">
                                                        <p>{val.title}</p>
                                                        <span className="jian">规格：{val.kg} &nbsp;库存{val.num}件</span>
                                                        <div className="money">
                                                            <span>￥{val.price}</span>
                                                        </div> 
                                                    </div>   
                                                </a>
                                                <a href="javascript:;"><i className="iconfont icon-tubiao225" onClick={this.props.addItem.bind(this,val)}></i></a>               
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        goodsData:state.goodsData,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updataGoods:(url)=>{asyncAction(url,dispatch,types.UPDATE_GOODS)},
        addItem:(val)=>{dispatch({type:types.ADD_ITEM,payload:val})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessGoods)