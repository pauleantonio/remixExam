import React, {Component} from 'react'
import {login} from './UserFunctions'
import ReCAPTCHA from "react-google-recaptcha";

class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            role:'',
            password:'',
            verified:false,
            errors:{}

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onVerify=this.onVerify.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    

    onSubmit(e){
        e.preventDefault()

        const user={
            email:this.state.email,
            password:this.state.password
        }
        if(this.state.verified){
            login(user).then( res=>{
        
                if(res){
                    this.props.history.push("/profile")
                }
            
            })
        }else{
            alert('Verify first')
        }
       
     
    }
    onVerify(respone) {
        console.log("Captcha successful");
        this.setState({
            verified:true
        })
    }
    render(){
      
        return(
            <div className='container'>
                <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">
                        Sign in
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
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="form-control"
                    name="password" 
                    placeholder="Enter password here" 
                    value={this.state.password}
                    onChange={this.onChange}></input>
                    </div>
                    <ReCAPTCHA
                        sitekey="6Lf_AbwZAAAAAAGW5ku_S7FzL_nKYcRSuSqgyeNP"
                        onChange={this.onVerify}
                    />,
                    <button type="submit" className="btn btn-primary" >Login</button>

                </form>
              
                </div>

                </div>

            </div>

        )

    }
}

export default Login