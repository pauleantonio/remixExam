import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'

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
                </div>
                </div>

            </Router>
        )
    }
}

// function App() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component </div>

//                         <div className="card-body">I'm an example component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

 export default App;

if (document.getElementById('app')) {
     ReactDOM.render(<App />, document.getElementById('app'));
 }
