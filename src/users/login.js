import React,{useState} from 'react';
import PublicHeader from './userheader';

const MyLogin = () =>{
   let[email, pickEmail] = useState("");
   let[pass, pickPassword] = useState("");
   let[msg, pickMessage] = useState("Enter Login Details");
   
   const goLogin = () =>{
      if(email =="" || pass==""){
        pickMessage("Empty Email or Password !");
      }else{
        pickMessage("Please Wait...");
        var url ="http://localhost:1234/account?email="+email+"&password="+pass;
        fetch(url)
        .then(response=>response.json())
        .then(accArray=>{
          if (accArray.length>0){
            pickMessage("Success ! Please wait Redirecting...");
            localStorage.setItem("fullname",accArray[0].name);// create local storage
            localStorage.setItem("vid",accArray[0].id); // create local storage
            window.location.href="http://localhost:3000/#/"; // redirect to dashboard
            window.location.reload();//refresh the page after going to home page
          }else{
            pickMessage("Fail ! Invalid or doesn't Exists");
          }
        })
    }
   }
  return(
        <>
          <PublicHeader/>
          <div className='container mt-5'>
             <div className='row pt-5'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'>
                <p className='text-center text-danger'> {msg} </p>
                  <div className='card shadow rounded'>
                      <div className='card-header bg-primary text-white'>
                        <i className='fa fa-lock'></i> Vendor Login
                        </div>
                      <div className='card-body'>
                         <div className='mb-3'>
                           <label>e-Mail Id</label>
                           <input type="text" className='form-control'
                           onChange={obj=>pickEmail(obj.target.value)}/>
                         </div>
                         <div className='mb-3'>
                           <label>Password</label>
                           <input type="password" className='form-control'
                           onChange={obj=>pickPassword(obj.target.value)}/>
                         </div>
                      </div>
                      <div className='card-footer text-center'>
                        <button className='btn btn-danger'
                        onClick={goLogin}>Login</button>
                      </div>
                   </div>
                </div>
                <div className='col-lg-4'></div>
              </div>
          </div>
        </>
    )
}

export default MyLogin;