import React, {Component} from 'react'
import {getJoke} from './UserFunctions'
import Email from './Email'
import Social from './Social'
import MapContainer from './Map'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            joke:'',
            delivery:'',
            name:'',
            email:''
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
        const handleSocialLogin = (user) => {
            console.log(user)
            console.log(user.profile.name)
            this.setState({
               name:user.profile.name,
               email:user.profile.email
            })
          }
           
        const handleSocialLoginFailure = (err) => {
            console.error(err)
          }
        return(
            <div className="container">
                <div className="jumbotron">
                    <div className="col-sm-8 mx-auto ">
                       <p>{this.state.joke}</p> 
                       <p>{this.state.delivery}</p> 
                        </div>
         
                </div>
                <Email></Email>
           
            <div className="jumbotron">
                    <div className="col-sm-8 mx-auto ">
                    <h1 className="h3 mb-3 font-weight-normal">
                    Sample Social Login
                    </h1>
                    <Social
            provider='google'
            appId='86638633682-02pnp0uq4t3s6s2eiicao0g9opdlq8tv.apps.googleusercontent.com'
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
            >
            Login with Google
            </Social>
                       <p>Name: {this.state.name}</p> 
                       <p>Email: {this.state.email}</p> 
                        </div>
            
                </div>

            <div className="jumbotron">
            <MapContainer>

                    </MapContainer>
         
            </div>
            </div>
         
        )



    }

}

export default Landing