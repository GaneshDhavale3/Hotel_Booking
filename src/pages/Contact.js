import React from 'react';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import {  Link } from 'react-router-dom';


function Contact() {
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    // For Login On-Click
    const submit = () => {

        let path = `userRegr`;
        this.props.history.push(path);
        console.log(user + ' ' + passwd);
    }

   
  

    return (
        <div>
          <Navbar />  
        <div className="bg-style1">
        <form >
        <div className="row justify-content-center pt-5 mt-5">
            <div className="col-sm-6" style={{paddingTop:"9%"}}>
                <div  className="login-style">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" className="form-control" placeholder="example@gmail.com" 
                            onChange={e => setUser(e.target.value)} id="email" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control"
                            onChange={e => setPasswd(e.target.value)} id="pwd" required/>
                    </div>
                    {/* <div><a href="">Forgot Password?</a></div> */}
                    <div><br /></div>

                    <div >
                        <button type="button" onClick={submit} class="btn btn-primary">Sign In</button>&nbsp;&nbsp;&nbsp;
                        <Link to="/userReg"><button type="button" class="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
        </form>
        </div>
        <Footer />
        </div>
    )
}
export default Contact