import React from 'react';
import Create from './create';

function Login(){
    return(
        <div>
              <div className="login">
      <h3>Login</h3>
      <form>
      <input type="text" placeholder ="Enter email or phone number"/>
      <input type="password" placeholder="Password"/>
      <a className="atag" href="#">Forgot Password</a>
      </form>
      
      <button className="loginbtn"> Login</button><br/><br/><br/><br/>
      <span>Not registered? <a className="tag" href="#" >Create an account</a></span>
    </div>
        </div>
    );
}

export default Login;