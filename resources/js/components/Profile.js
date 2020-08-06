import React, {Component} from 'react'
import {getProfile} from './UserFunctions'


class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            role:''
            
        }
    }

    componentDidMount(){
        getProfile().then(res=>{
            this.setState({
                name:res.user.name,
                role:res.user.role_id,
                email:res.user.email
            })

        })
    }
    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                <div className="col-sm-4 mx-auto">
                    Profile
                </div>
                <table className="table col-md-4 mx-auto">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{this.state.name}</td>
                  
                </tr>

                <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                </tr>

                <tr>
                    <td>Role</td>
                    <td>{this.state.role}</td>
                </tr>

                </tbody>

                </table>
                </div>

            </div>

        )

    }

}


export default Profile