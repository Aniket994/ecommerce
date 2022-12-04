import React, {useState, useEffect} from 'react';
import AdminHeader from './adminheader';

const Myorder = ()=>{
  let[orderlist, updateOrder] = useState([]);
 

  const getOrder = ()=>{ 
      fetch("http://localhost:1234/order")
      .then(response =>response.json())
      .then(orderArray =>{
          updateOrder(orderArray);
      })
  }

  useEffect(()=>{
   getOrder();
},[true]);

  return(
        <>
          <AdminHeader/>
          <div className='container mt-5'>
            <div className='row mb-4'>
               <div className='col-lg-12 text-center'>
                  <h2 className='text-primary m-2'>Order Management -: {orderlist.length} </h2>
               </div>
            </div>
            {
              orderlist.map((order,index)=>{
                return(
                   <div className='row mb-4 shadow' key={index}>
                     <div className='col-lg-4 mt-5'>
                        <h6> {order.customername} </h6>
                        <p> Mobile No -{order.mobile} </p>
                        <p> e-Mail- {order.email} </p>
                        <p> Address -{order.address} </p>
                     </div>
                     <div className='col-lg-8'>
                     <h5 className='text-center'> Items : {order.item.length} </h5>
                     <table className='table'>
                        <thead>
                           <tr className='bg-light text-primary'>
                             <th>Product Id</th>
                             <th>Product Name</th>
                             <th>Price</th>
                             <th>Photo</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                            order.item.map((product,index)=>{
                               return(
                                  <tr key={index}>
                                    <td> {product.id} </td>
                                    <td> {product.name} </td>
                                    <td> {product.price} </td>
                                    <td>
                                      <img src={product.photo} height="60"/>
                                    </td>
                                  </tr>
                               )
                            })
                           }
                        </tbody>

                     </table>
                     </div>
                    </div>
                )
              })
            }
          </div>
        </>
    )
}

export default Myorder;