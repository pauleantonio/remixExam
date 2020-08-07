import React, {Component} from 'react'
import {getJoke} from './UserFunctions'
import Email from './Email'
class Landing extends React.Component{
    constructor(){
        super()
        this.state={
            joke:'',
            delivery:''
            
        }
    }

    componentDidMount(){
        // getJoke().then(res=>{
        //     this.setState({
        //         joke:res.setup,
        //         delivery:res.delivery
        //     })


        // })
    }

 
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <div className="col-sm-8 mx-auto ">
                       <p>{this.state.joke}</p> 
                       <p>{this.state.delivery}</p> 
                        </div>
         
                </div>
                <Email></Email>
            </div>
         
        )



    }

}

export default Landing