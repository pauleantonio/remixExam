import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends React.Component{
    constructor(){
        super()
        this.state={ 
            name:'',
            email:'',
            password:'',
            errors:{}

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        register(user).then(res=>{
            if(res){
                this.props.history.push('/login')
            }
        })
    }
    render(){
        return(
            <div className='container'>
                <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">
                        Register
                    </h1>
                    <div className="form-group"> 
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className="form-control"
                    name="name" 
                    placeholder="Enter Name here" 
                    value={this.state.name}
                    onChange={this.onChange}></input>
                    </div>

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
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="form-control"
                    name="password" 
                    placeholder="Enter password here" 
                    value={this.state.password}
                    onChange={this.onChange}></input>
                    </div>
                <input type="submit" value="Submit"/>
                </form>
                  
                  
                </div>

                </div>

            </div>

        )

    }
}

export default Register