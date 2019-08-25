import React from "react";
import './loginForm.css';

class Login extends React.Component{
render(){
    return(
        <div className='login-form'>
            <h2>Login</h2>      
                <p style={{'font-size': '50px','backgroundColor': 'pink'}}>And all of my login content</p>

            <form>
                <input type='text'/>
                <input type='password'/> 
                <input type='submit'/>          


            </form>
        </div>
    )
} 
}
export default Login;