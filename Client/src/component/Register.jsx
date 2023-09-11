import React from "react";
import { NavLink } from "react-router-dom";
import login_image from '../assets/login1.webp';
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const history = useHistory();

    const [user, setuser] = useState({
        username : "",
        email : "",
        password : "",
        comfirm_password: ""

    });

    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setuser({...user,[name]:value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username,email,password,comfirm_password} = user;
        try {
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    username,email,password,comfirm_password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Already Used Details")
            }else{
                window.alert("Registered Successfully");
                history.push('/login')
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <div className="container shadow my-5 ">
                <div className="row justify-content-end ">
                    <div className="p-5 col-md-6 d-flex flex-column align-items-center text-black justify-content-center order-2">
                        <h1 className="display-4 fw-bolder">Create an account</h1>
                        <img src={login_image} className=" ms-5 w-75" alt="logo" />
                        <p className="lead text-center">Enter Your Details To Register</p>
                        <h5 className="mb-5">OR</h5>
                        <p class="text-dark">
                        You don’t have an account? <NavLink to="/login" class="text-reset text-warning active">Sign In</NavLink>.
                            </p>
                               
                    </div>
                    <div className="col-md-6 p-5 bg-warning text-dark bg-opacity-50">
                        <h1 className="display-6 fw-bolder mb-6">Register</h1>
                        <form  className="p-5" onSubmit={handleSubmit} method="POST"> 
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" 
                                       class="form-control" 
                                       id="name" 
                                       placeholder="Enter your name"
                                       name="username"
                                       value={user.username}
                                       onChange={handleInput}
                                       />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"> 
                                Email address</label>
                                <input type="email" 
                                       class="form-control" 
                                       id="exampleInputEmail1" 
                                       aria-describedby="emailHelp"
                                       name="email"
                                       value={user.email}
                                       onChange={handleInput}
                                       />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" 
                                       class="form-control" 
                                       id="exampleInputPassword1"
                                       name="password"
                                       value={user.password}
                                       onChange={handleInput}
                                       />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" 
                                       class="form-control" 
                                       id="exampleInputRePassword1"
                                       name="comfirm_password"
                                       value={user.comfirm_password}
                                       onChange={handleInput}
                                       />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" 
                                       class="form-check-input" 
                                       id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-warning rounded-pill pb-2 w-100 mt-4">Register</button>
                        </form>

                    </div>
                    
                </div>
            </div>


        </div>
    );
}

export default Register;