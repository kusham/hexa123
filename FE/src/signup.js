import React, {useState} from 'react';
import axios from 'axios';
import Footer from './Footer';
import './styleRegister.css';
import {Link} from 'react-router-dom';



function SignUp () {
    
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    

    function sentData(e) {
        e.preventDefault();
     const newUser ={
       email, 
       username,
       password
     }
     
     if(!(email===""|| username==="" || password==="")) {
        axios.post("http://localhost:8000/api/add", newUser).then(()=>{
       
            window.location.href = '/4';
            //go from here
     
          }).catch((err)=>{
            alert(err);
          })
        }
     }

     




    return (
        <div className="SignUp">

            <div>
                <div id="navigation-bar">
                    <ul>
                        <i className="fas fa-bars" />
                        <li><a href="aboutUs.html"><i className="fas fa-users " /> About Us</a></li>
                        <li><a href="contact.html"><i class="fas fa-phone-alt"></i> Contact Us</a></li>
                        <li><Link to="/"><i className="fas fa-home" /> Home</Link></li>
                        
                       
                        
                        {/* <li><a href="aboutUs.html"><i className="fas fa-users " /> About Us</a></li>
                        <li><a href="#a"><i className="fas fa-phone-alt" /> Contact Us</a></li>
                        <li><a href='/'><i className="fas fa-home" /> Home</a></li> */}
                    </ul>
                </div>
                <div className="box">

                    <div className="page">
                        <div className="header">
                            <a id="login" className="work" href='/2' style={{ color: "white" }}>login</a>
                            <a id="signup" href='/3' style={{ color: "red" }}>sign Up</a>
                        </div>
                        <div id="errorMsg" />
                        <div className="content">

                            <form className="signup" name="signupForm"  onSubmit={sentData}>
                                <input type="email" name="email" id="signEmail" placeholder="Email" onChange={(e)=>{
                                    setemail(e.target.value);
                                   }}/>

                                <input type="text" name="name" id="signName" placeholder="Username" onChange={(e)=>{
                                     setusername(e.target.value);
                                   }}/>

                                <input type="password" name="password" id="signPassword" placeholder="Password" onChange={(e)=>{
                                     setpassword(e.target.value);
                                   }}/>

                                
                                <input type="submit" defaultValue="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    );
}

export default SignUp;

