import React from 'react'
import '../assets/css/font_l6a0fwucxvzehfr.css'

import BusinessGoods from './businessGoods'
import BusinessFooter from './businessFooter'
import BusinessCar from './businessCar'
import BusinessShop from './businessShop'
import Businessping from './businessping'
import BusinessTitle from './businessTitle'
import Error from './error';


import {Route,Switch,Redirect} from 'react-router-dom'
export default class Business extends React.Component{
    render(){
        return(
            <Route-Fragment>
                <BusinessTitle list='hello,world'/>
                    <Switch>
                        <Route path='/business/businessGoods' component={BusinessGoods}/>
                        <Route path='/business/businessCar' component={BusinessCar}/>
                        <Route path='/business/businessShop' component={BusinessShop}/>
                        <Route path='/business/businessping' component={Businessping}/>
                        <Redirect exact path='/business' to='/business/businessGoods'/>
                        <Route component={Error}/>
                    </Switch>
                    {/* <BusinessCar/> */}
                <BusinessFooter/>
            </Route-Fragment>
        )
    }
}