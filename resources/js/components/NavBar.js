import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {getProfile} from './UserFunctions'
class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    
  
    render(){
       
    


        const guestLink=(
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    login
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    register
                </Link>
            </li>

            </ul>

        )

        const userLink=(
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    Profile
                </Link>
            </li>
            <li className="nav-item">
                        <Link to="/crud" className="nav-link">
                            CRUD
                        </Link>
           </li>

            <li className="nav-item">
                <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </a>
            </li>
         
        

            </ul>

        )

        const adminLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                        <Link to="/crud" className="nav-link">
                            USERS
                        </Link>
                    </li>

            </ul>

        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                 <button className="navbar-toggler"
                 type="button"
                 data-toggle="collapse"
                 data-target="#navbar1"
                 aria-controls="navbar1"
                 aria-expanded="false"
                 aria-label="Toggle navigation"

                 >
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div  id="navbar1" className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                    </ul>
                    {localStorage.usertoken?userLink:guestLink}

                 </div>
            </nav>

        )

    }

}

export default withRouter(Navbar)