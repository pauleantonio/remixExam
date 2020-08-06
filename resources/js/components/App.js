import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Crud from './Crud'


class App extends Component {
    render(){
        return (
            <Router>
                <div className="App">
                <Navbar/>
                <Route exact path="/" component = {Landing}/>
                <div className="container">
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/crud" component={Crud}/>
                    <Route exact path="/create" component={Crud}/>
             
                </div>
                </div>

            </Router>
        )
    }
}



 export default App;

if (document.getElementById('app')) {
     ReactDOM.render(<App />, document.getElementById('app'));
 }
