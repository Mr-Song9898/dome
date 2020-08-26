import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class BusinessCar extends React.Component{
    render(){
        return(
            <div>
                <Link className="window" tag="div" to="/business/businessGoods"></Link>
                <div className="gou">
                    <p className="wu_t"><i></i>购物车<a href="#" onClick={this.props.removeAll}><span className="iconfont icon-iconfontshanchu"></span>清空</a></p>
                    <div className="container">
                        <table border="0" className="table">
                            <tbody>
                                {
                                    this.props.buyCar.length==0?<tr><td id="hehe"><div className="buy"><span>购物车为空</span><Link to="/business/businessGoods">去购物吧</Link></div></td></tr>:
                                    this.props.buyCar.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}、{item.title}</td>
                                                <td><span className="j_ge">￥{item.price}</span></td>
                                                <td>
                                                    <div className="xuan">
                                                        <span id="min" className="iconfont icon-jianshao" onClick={this.props.remove.bind(this,item)}></span>
                                                        <span id="number">{item.number}</span>
                                                        <span id="add" className="iconfont icon-tubiao225" onClick={this.props.add.bind(this,item)}></span>  
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        buyCar:state.buyCar
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        add:(item)=>{dispatch({type:"ADD_ITEM",payload:item})},
        remove:(item)=>{dispatch({type:"REMOVE_ITEM",payload:item})},
        removeAll:()=>{dispatch({type:"REMOVE_ALL",payload:""})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessCar)