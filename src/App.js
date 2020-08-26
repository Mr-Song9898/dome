import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch,Route,Redirect} from 'react-router-dom'

import Home from './components/home';
import Footer from './components/footer';
import Wallet from './components/wallet';
import Personal from './components/personal';
import Convenience from './components/convenience';
import Login from './components/login';
import Register from './components/register';
import Business from './components/business';
import Error from './components/error';
import Authuser from './components/authuser';
import Authreg from './components/authreg';
import Loading from './components/loading';
import BusinessGoods from './components/businessGoods';

import {connect} from 'react-redux';
import * as types from './store/types';

import './assets/css/home.css'
import './assets/css/bootstrap.css';


class App extends Component {
  render() {
    let path=this.props.location.pathname;
    let {bFoot,view_foot}=this.props;
    if(/business|login|register/.test(path)){
      setTimeout(() => {
        view_foot(false)
      }, 0);
    }
    if(/home|convenience|wallet|personal/.test(path)){
      setTimeout(() => {
        view_foot(true)
      }, 0);
    }

    return (
      <React-Fragment>
        {this.props.bLoading && <Loading/>}
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/wallet' component={Wallet}/>
          {/* <Route path='/pensonal' component={Personal}/> */}
          <Authuser path='/personal' component={Personal}/>
          <Route path='/convenience' component={Convenience}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/businessGoods' component={BusinessGoods}/>
          <Route path='/business' component={Business}/>
          <Redirect exact from='/' to='home'/>
          <Route component={Error}/>
        </Switch>
        {bFoot && <Footer/>}
      </React-Fragment>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    bFoot:state.bFoot,
    bLoading:state.bLoading
  }
}
const mapDispatchToProps=(dispatch)=>({
    view_foot:(bl)=>{dispatch({type:types.FOOT_VIEW,payload:bl})},
    view_loading:(bl)=>{dispatch({type:types.LOADING_VIEW,payload:bl})},
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
