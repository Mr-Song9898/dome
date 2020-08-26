import React from 'react'
export default class BusinessShop extends React.Component{
    render(){
        return(
            <div>
                <div className="shop">
                        <img src="../assets/images/gdsgf4.jpg" className="img_sh"/>
                        <div className="sh_name">
                            <div className="container">
                                <p className="biti">百佳超级市场</p>
                                <div className="zero">
                                    <span className="fu">商铺评价：</span>
                                    <div className="xing">
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                        <span className="glyphicon glyphicon-star"></span>
                                    </div>
                                </div>
                                <div className="zero">
                                    <span className="fu">商铺距离：</span>
                                    <div className="xing">285米</div>
                                </div>
                                <div className="zero">
                                    <span className="fu">起送价：</span>
                                    <div className="xing">￥30.00</div>
                                </div>
                                <div className="zero">
                                    <span className="fu">配送费：</span>
                                    <div className="xing">￥20.00</div>
                                </div>
                                <div className="zero">
                                    <span className="fu">营业时间：</span>
                                    <div className="xing">08:00-20:00</div>
                                </div>
                                <div className="zero">
                                    <span className="fu">电话：</span>
                                    <div className="xing">13269816709</div>
                                </div>
                                <div className="zero">
                                    <span className="fu">地址：</span>
                                    <span className="xing">山东省济南市天桥区历山北路黄台家居广场D座</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}