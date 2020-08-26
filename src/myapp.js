import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Home from './components/home';
import Home from './components/home';
import Home from './components/home';
import Home from './components/home';
import Home from './components/home';
import Home from './components/home';
import Authuser from './components/authuser';
import Loading from './components/loading';

import {connect} from 'react-redux';
import * as types from './store/types';

import './assets/css/bootstrap.css'
import './assets/css/home.css';

class App extends Component{
    render(){
        return(
            <React-Fragment>
                <Switch>
                    <Route path=''/>
                </Switch>
            </React-Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        bFoot:state.bFoot,
        bLoading:state.bLoading
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        view_foot:(bl)=>{dispatch({type:types.FOOT_VIEW,payload:bl})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);