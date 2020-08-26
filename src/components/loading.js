import React from 'react'
import '../assets/css/loading.css'
export default class Loading extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="bloading">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}