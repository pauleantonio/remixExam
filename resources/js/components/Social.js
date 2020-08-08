import React from 'react'
import SocialLogin from 'react-social-login'
 
class Social extends React.Component {
 
    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}>
            { this.props.children }
          </button>



           
        )
    }
}
 
export default SocialLogin(Social);