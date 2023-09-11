import React,{useState} from "react";

import about from '../assets/Reviewcart.jpg'

const Contact = () => {


    const [msg, setMsg] = useState({
        name : "",
        email : "",
        message : ""
    });

    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg,[name]:value});
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const {name,email,message} = msg;
        try {
            const res = await fetch('/message', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,email,message
                })
            })

            if(res.status === 400 || !res){
                window.alert("Message Not sent. Try Again")
            }else{
                window.alert("Message sent  Successfully");
                setMsg({
                    name : "",
                    email : "",
                    message : "",
                })
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                       <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                       <h1 className="display-6 text-center mb-4">Have <b> Some </b> Questions?</h1> 
                       <hr className="w-25 mx-auto"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5">
                    <from onSubmit={handleSubmit} method="POST" >
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" 
                                       class="form-control" 
                                       id="name" 
                                       placeholder="Enter your name"
                                        name="name"
                                        value={msg.name}
                                        onChange={handleChange}
                                       />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" 
                                       class="form-control" 
                                       id="exampleFormControlInput1" 
                                       placeholder="Enter your E-mail"
                                       name="email"
                                        value={msg.email}
                                        onChange={handleChange}
                                       />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" 
                                          id="exampleFormControlTextarea1" 
                                          rows="5" 
                                          name="message"
                                        value={msg.message}
                                        onChange={handleChange}
                                          ></textarea>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary rounded-pill px-4">Send Messege
                            <i className="fa fa-paper-plane ms-2"></i></button>
                        </from>
                       
                    </div>
                    <div className="col-md-6 ">
                    <img src={about} alt="About"  className="w-80 mt-5 ms-8"/>
                       
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Contact;