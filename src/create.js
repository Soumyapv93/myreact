import React from 'react';
import {FaArrowRight} from "react-icons/fa";

function Create(){
    return(
        <div>
              <div className="create">
      <h3>Create your Account</h3>
      <form>
      <input type="text" placeholder ="Full Name"/>  
      <input type="text" placeholder ="Enter email or phone number"/>
      <input type="password" placeholder="Password"/>
      <input type="password" placeholder="Password"/>
     
      </form>
      <br/>
      <button className="loginbtn"> <FaArrowRight/></button><br/><br/><br/><br/>
      <span>Already have an account? <a className="tag" href="">Login</a></span>
    </div>
        </div>
    );
}

export default Create;