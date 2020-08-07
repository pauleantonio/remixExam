import React, {Component} from 'react'
import * as emailjs from "emailjs-com"

class Email extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            name:'',
            number:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        emailjs.sendForm(
            'gmail',
            'sampletemplate',
            '#sample',
            'user_0UDLobtUADc2RhP0t7GRb'
        ).then(
            this.setState({
                email:"",
                name:"",
                number:""
            })
        )
        .catch()
       

        
    }

    render(){
        return(
      
                <div className="jumbotron">
                    <div className="col-sm-8 mx-auto ">
                     <form id="sample" noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                    Send us An Email!
                    </h1>
                    <div className="form-group"> 
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className="form-control"
                    name="email" 
                    placeholder="Enter Email here" 
                    value={this.state.email}
                    onChange={this.onChange}></input>
                    </div>

                    <div className="form-group"> 
                    <label htmlFor="password">Name</label>
                    <input type="text" 
                    className="form-control"
                    name="name" 
                    placeholder="Enter password here" 
                    value={this.state.name}
                    onChange={this.onChange}></input>
                    </div>

                    <div className="form-group"> 
                    <label htmlFor="number">Number</label>
                    <input type="number" 
                    className="form-control"
                    name="number" 
                    placeholder="Enter password here" 
                    value={this.state.number}
                    onChange={this.onChange}></input>
                    </div>

                    <button type="submit" className="btn btn-primary" >Send!</button>

                </form>

                    </div>
                </div>
      
        )



    }

}

export default Email