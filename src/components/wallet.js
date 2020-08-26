import React from 'react'
import '../assets/css/font_6yxmrwgmg7kl0udi.css'
export default class Wallet extends React.Component{
    render(){
        return(
            <div>
                <div className="top_c">
                    <p className="titi">钱包</p>
                </div>
                <div className="tou">
                    <span>可用余额（元）</span>
                    <p>22215.22</p>
                </div>
                <div className="lie_b">
                    <div className="container">
                        <div className="one">
                            <a href="recharge.html">
                                <p className="biao"><span className="iconfont icon-chongzhi"></span>充值<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                        <div className="one">
                            <a href="withdrawals.html">
                                <p className="biao"><span className="iconfont icon-tixian1"></span>提现<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lie_b">
                    <div className="container">
                        <div className="one">
                            <a href="quota.html">
                                <p className="biao"><span className="iconfont icon-daikuanedu"></span>信用额度<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                        <div className="one">
                            <a href="bank.html">
                                <p className="biao"><span className="iconfont icon-buoumaotubiao26"></span>银行卡<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lie_b">
                    <div className="container">
                        <div className="one">
                            <a href="profit.html">
                                <p className="biao"><span className="iconfont icon-jilu"></span>分润记录<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                        <div className="one">
                            <a href="bill.html">
                                <p className="biao"><span className="iconfont icon-zhangdan"></span>账单<i className="iconfont icon-jiantou"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}