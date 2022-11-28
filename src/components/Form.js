
import { Axis } from 'echarts';
import React, {useState} from 'react';
import axios from 'axios';
function Form() {


  function handle_upload()  {
    axios.get("https://randomuser.me/api/").then(response=>{
      var person = response.data.results[0];
      var picture = person.picture.medium;
      var dob = person.dob.date ;
      var first_name = person.name.first;
      var last_name = person.name.last;
      var username = person.login.username;
      var email = person.email;
      document.getElementById("first").innerHTML = first_name;
      document.getElementById("last").innerHTML = last_name; 
      document.getElementById("email").innerHTML = email; 
      document.getElementById("pw").innerHTML = username; 
      var birht = dob.split('T')[0];
      document.getElementById("birth").innerHTML  =birht; 
      document.getElementById("back").style.backgroundImage = "url("+picture+")";
      document.getElementById("back").style.width="72px";
      document.getElementById("back").style.height="72px";
    });
  }

  return (
      <div className="Form">
          <h1 className="h1 pt-5 text-center">Welcome to POTW8!</h1>
        <form className="p-5">
            <div className="mb-3">
                <div class="row">
                    <div class="col">
                        <label for="first" className="form-label">First Name:</label>
                        <p id='first'></p>
                    </div>
                    <div class="col">
                        <label for="last" className="form-label">Last Name:</label>
                        <p id='last'></p>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address:</label>
                <p id='email'></p>
            </div>
            <div className="mb-3">
                <label for="pw" className="form-label">Username:</label>
                <p id='pw'></p>
            </div>
            <div className="mb-3">
                <label for="birth" className="form-label">Date of Birth:</label>
                <p id='birth'></p>
            </div>
            <div className="mb-3">
                <label id="back"  className="form-label"></label>
            </div>
            <button onClick={() => handle_upload()} type="button" className="btn btn-primary mt-5">Generate</button> 

        </form>
      </div>
  );
}

export default Form;
