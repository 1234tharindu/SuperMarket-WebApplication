import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useHistory } from "react-router-dom";

const Profile = () => {

    const history = useHistory();

    const [prof, setuser] = useState({
        firstname: "",
        lastname: "",
        address: "",
        dateofbirth: "",
        Gender:"",
        city: "",
        contact: ""

    });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setuser({ ...prof, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstname,lastname,address,dateofbirth,Gender,city,contact } = prof;
        try {
            const res = await fetch('/profile', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname,lastname,address,dateofbirth,Gender,city,contact
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Already Used Details")
            } else {
                window.alert("Registered Successfully");
                history.push('/')
            }
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div>
            <div className="container my-5   ">
                <div className="row justify-content-center  ">
                  
                    <div className="bg-warning text-dark bg-opacity-50 w-50 h-50 ">
                        <h1 className="display-6 fw-bolder mb-6 mt-5 justify-content-center text-center">Profile Details</h1>
                        <form class="col g-3 p-5  " onSubmit={handleSubmit} method="POST">
                            <div class="col-md-5">
                                <label for="validationServer01" class="form-label">First name</label>
                                <input type="text" class="form-control " id="validationServer01" required name="firstname"
                                       value={prof.firstname}
                                       onChange={handleInput}/>
                                
                            </div>
                            <div class="col-md-5">
                                <label for="validationServer02" class="form-label">Last name</label>
                                <input type="text" class="form-control " id="validationServer02" required  name="lastname"
                                       value={prof.lastname}
                                       onChange={handleInput}/>
                                
                            </div>
                            <div class="col-md-5">
                                <label for="validationServer02" class="form-label">Address</label>
                                <input type="text" class="form-control " id="validationServer02" required name="address"
                                       value={prof.address}
                                       onChange={handleInput} />
                                
                            </div>
                            <div class="col-md-5">
                                <label for="validationServer02" class="form-label">Date Of Birth</label>
                                <input type="text" class="form-control " id="validationServer02"  required  name="dateofbirth"
                                       value={prof.dateofbirth}
                                       onChange={handleInput}/>
                                
                            </div>



                            <div class="col-md-5">
                            <label for="validationServer03" class="form-label">Gender</label>
                            <select class="form-select" aria-label="Default select example" name="Gender"
                                       value={prof.Gender}
                                       onChange={handleInput}>
                                <option selected>Choosen your Gender</option>
                                <option value="1">Male</option>
                                <option value="1">FeMale</option>
                                
                            </select>
                            </div>




                            
                            <div class="col-md-5">
                            <label for="validationServer03" class="form-label">City</label>
                            <select class="form-select" aria-label="Default select example" name="city"
                                       value={prof.city}
                                       onChange={handleInput}>
                                <option selected>Choosen your city</option>
                                <option value="1">Ambalngoda</option>
                                <option value="2">Ampara</option>
                                <option value="3">Anuradhapura</option>
                                <option value="6">Badulla</option>
                                <option value="7">Balangoda</option>
                                <option value="8">Bandarwela</option>
                                <option value="9">Batticaloa</option>
                                <option value="10">Beruwala</option>
                                <option value="11">Chawakacheri</option>
                                <option value="12">Chilaw</option>
                                <option value="13">Colombo</option>
                                <option value="14">Dambulla</option>
                                <option value="15">Eravur</option>
                                <option value="16">Galle</option>
                                <option value="17">Gampha</option>
                                <option value="18">Hambanthoda</option>
                                <option value="19">Haputhale</option>
                                <option value="20">Hatton</option>
                                <option value="21">Horana</option>
                                <option value="22">Harispattuwa</option>
                                <option value="23">Ja-Ela</option>
                                <option value="24">Jaffna</option>
                                <option value="25">Kadugannawa</option>
                                <option value="26">Kalmunai</option>
                                <option value="27">Kaluthara</option>
                                <option value="28">Kandy</option>
                                <option value="29">Kattankudy</option>
                                <option value="30">Kegalle</option>
                                <option value="31">Kelaniya</option>
                                <option value="32">Kolonnawa</option>
                                <option value="33">Kuliyapitiya</option>
                                <option value="34">Kurunagala</option>
                                <option value="35">Mannar</option>
                                <option value="37">Matale</option>
                                <option value="38">Matara</option>
                                <option value="39">Moratuwa</option>
                                <option value="40">Mount Lavinia</option>
                                <option value="41">Nawalapitiya</option>
                                <option value="42">Negombo</option>
                                <option value="43">Nugegoda</option>
                                <option value="44">Nuwar Eliya</option>
                                <option value="45">Panadura</option>
                                <option value="46">Peliyagoda</option>
                                <option value="47">Ponit Pedro</option>
                                <option value="48">Puttalam</option>
                                <option value="49">Rathanapura</option>
                                <option value="50">Sainthamarathu</option>
                                <option value="51">Sigiriya</option>
                                <option value="52">Sri Jayewardenapura</option>
                                <option value="53">Thalawakale</option>
                                <option value="54">Tangalle</option>
                                <option value="55">Trincomalee</option>
                                <option value="56">Valvettithurai</option>
                                <option value="57">Vavuniya</option>
                                <option value="58">Wattala</option>
                                <option value="59">Wattegama</option>
                                <option value="60">Weligama</option>
                            </select>
                            </div>

                            
                            <div class="col-md-5">
                                <label for="validationServer05" class="form-label">Contact Number</label>
                                <input type="text" class="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" required  name="contact"
                                       value={prof.contact}
                                       onChange={handleInput}/>
                              
                            </div>
                            
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input is-invalid" type="checkbox"  id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required  
                                       />
                                    <label class="form-check-label" for="invalidCheck3">
                                        Agree to terms and conditions You must agree before submitting
                                    </label>
                                    {/* <div id="invalidCheck3Feedback" class="invalid-feedback">
                                        You must agree before submitting.
                                    </div> */}
                                </div>
                            </div>
                            <div class="col-md-12 mt-1 mb-4 ">
                                <button class="btn btn-warning rounded-pill pb-3 mt-4" type="submit">Submit Your Details</button>
                            </div> 
                        </form>

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Profile;