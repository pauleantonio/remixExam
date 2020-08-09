import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Crud from './Crud'
import Create from './Create'
import Edit from './Edit'


class App extends Component {
    render(){
        return (
            <Router>
                <div className="App">
                <Navbar/>
                <Route exact path="/" component = {Landing}/>
                <div className="container">
                    <Route  path="/register" component={Register}/>
                    <Route  path="/login" component={Login}/>
                    <Route  path="/profile" component={Profile}/>
                    <Route  path="/crud" component={Crud}/>
                    <Route  path="/create" component={Create}/>
                    <Route  path="/edit" component={Edit}/>
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
