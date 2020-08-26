import React from 'react'
import ReactSwipe from 'react-swipe'
import QueryString from 'query-string'
export default class Error extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"hello world!",
            list:[
                {msg:"hello1"},
                {msg:"hello2"},
                {msg:"hello3"},
                {msg:"hello4"},
                {msg:"hello5"},
            ],
            list_v:[]
        }
        fetch(
            './data/list.json'
        ).then(
            res=>res.json()
        ).then(
            data=>{this.setState({list_v:data})
                // console.log(this.state.list_v)
            }
        )
    }

    render(){
        return(
            <div>
                <a href="javascript:window.history.go(-1);">返回</a>
                <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:1000}}>
                    {this.state.list.map((item,index)=>{
                        return <div key={index}>{item.msg}</div>
                    })}
                </ReactSwipe>
                {this.state.list_v.map((item,index)=>{
                    return <div key={index}>{item.msg}</div>
                })}
            </div>
        )
    }

}