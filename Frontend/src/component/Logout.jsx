
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Logout =() =>{

    const history=useHistory();

    const logout= async()=>{
        try{
            const res= await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/Json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
            if(res.status===401 || ! res){
                window.alert("Please Logout later")
            }else{
                history.push('/');
                window.location.reload()

            }
        }catch(error){
            console.log(error)

        }
    }

    useEffect(()=>{
        logout();
    },[]);


    return(
        <div>

        </div>
    );
}

export default Logout