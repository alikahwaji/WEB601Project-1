import React from "react";
import './loginForm.css';

class Login extends React.Component{
    state = {
        username: '',
        password: '',
    }

render(){
    return(
        <div className='login-form'> 
            <br /><br /><br /> 
               
            <form>
            <h2>Login form</h2>    
                <input 
                name='username'
                placeholder='Username'
                />
                <br />
                <input 
                type='password'
                placeholder='Password'
                /> 
                <br />
                <input type='submit'/>       
            </form>

            <br /><br /><br /> 
           
        </div>        
    )
} 
}
export default Login;
