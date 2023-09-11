import React from "react";
import { NavLink } from "react-router-dom";
import reg from '../assets/register10.webp';
import { useState } from "react";


const Login = () => {
    const [user, setuser] = useState({
        email : "",
        password : ""
    });

    const handleChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        setuser({...user,[name]:value})
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password} = user;
        try {
            const res = await fetch('/login', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email,password
                })
            });

            if(res.status === 400 || !res){
                window.alert("Invalid Credentials")
            }else{
                window.alert(" Login Successfull");
                window.location.reload();
            }


        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <div className="container shadow my-5 ">
                <div className="row ">
                    <div className="p-5 col-md-6 d-flex flex-column align-items-center text-black justify-content-center ">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <img src={reg} className=" ms-5 w-75" alt="logo" />
                        <p className="lead text-center">Enter Your Details To Login</p>
                        <h5 className="mb-5">OR</h5>
                        <p class="text-dark">
                        You don’t have an account? <NavLink to="/register" class="text-reset text-warning active">Sign Up</NavLink>.
                            </p>
                                 
                    </div>
                    <div className="col-md-6 p-5 bg-warning text-dark bg-opacity-50">
                        <h1 className="display-6 fw-bolder mb-6">LOGIN</h1>
                        <form  className="p-5" onSubmit={handleSubmit}> 
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"> 
                                Email address</label>
                                <input type="email"
                                       class="form-control" 
                                       id="exampleInputEmail1" 
                                       aria-describedby="emailHelp"
                                       name="email"
                                       value={user.email}
                                       onChange={handleChange}
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
                                       onChange={handleChange}
                                       />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" 
                                       class="form-check-input" 
                                       id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            
                            <button type="submit" class="btn btn-outline-warning rounded-pill pb-2 w-100 mt-4">Login</button>
                        </form>

                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Login;