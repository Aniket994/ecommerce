import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () =>{
  return(
    <>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand">X-MART</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
    <ul className="navbar-nav me-auto">
                    <li className="nav-item px-4">
                        <Link className="nav-link active" to="/">
                          <i className='fa fa-home'></i> Dashboard
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link active" to="/product">
                        <i className='fa fa-suitcase'></i> Manage Product 
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link active" to="/order">
                        <i className='fa fa-phone'></i> Manage Orders
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <a className="nav-link active">
                       Welcome - {localStorage.getItem("fullname")} 
                       
                       
                      
                        </a>
                    </li>
                </ul>
                <button type="button" className="btn btn-danger btn-sm mx-5"onClick={logout} on>Logout</button> 

      </div>
  </div>
</nav>
    </>
  )
}

export default AdminHeader;

const logout = () =>{
  localStorage.clear();
  window.location.href="http://localhost:3000/#/login";
  window.location.reload();
}