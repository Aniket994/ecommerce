import React,{useState, useEffect} from 'react';
import AdminHeader from './adminheader';

const Myproduct = () =>{
  let[productlist, updateProduct] = useState([]);
   const getProduct = ()=>{
        fetch("http://localhost:1234/product")
        .then(response =>response.json())
        .then(productArray =>{
            updateProduct(productArray);
        })
     }

     let[mesg, updateMesg] = useState("");
     const deleteItem = (id) =>{
         var url = "http://localhost:1234/product/"+id;
         var postData = {
             headers:{'Content-Type':'application/json'},
             method:"DELETE"
         };
         fetch(url, postData)
         .then(response =>response.json())
         .then(serverRes=>{
             updateMesg("Delete From Cart");
             getProduct();// reload the list
         })
     }

    useEffect(()=>{
        getProduct();
     },[true]);

     let[pname, pickName] = useState();
     let[pprice, pickPrice] = useState();
     let[pphoto, pickPhoto] = useState();
     let[pdetails, pickDetails] = useState();
     let[msg, updateMessage] = useState();
     
     const save = () =>{
      
        var orderData = {
            "name":pname,
            "price":pprice,
            "photo":pphoto,
            "details":pdetails
            
        }
        var postData = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(orderData)
        };
        var url = "http://localhost:1234/product";
        fetch(url, postData)
        .then(response=>response.json())
        .then(serRes =>{
            updateMessage(pname+ "Save successfully!");
            pickName(""); pickPrice(""); pickPhoto(""); pickDetails("");
            getProduct();// to reload the list
        })
    }
    
   return(
        <>
            <AdminHeader/>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='border p-3 shadow rounded'>
                            <h3 className='text-center'>New Product</h3>
                            <hr/>
                            <div className='mb-3'>
                                <label>Product Name</label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickName(obj.target.value)}
                                value={pname}/>
                            </div>
                            <div className='mb-3'>
                                <label>Product Price</label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickPrice(obj.target.value)}
                                value={pprice}/>
                            </div>
                            <div className='mb-3'>
                                <label>Product Photo</label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickPhoto(obj.target.value)}
                                value={pphoto}/>
                            </div>
                            <div className='mb-3'>
                                <label>Product Details</label>
                                <textarea className='form-control'
                                onChange={obj=>pickDetails(obj.target.value)}
                                value={pdetails}></textarea>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary'
                                onClick={save}>Save Product</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                      <h3 className='text-center text-info mb-3'>Product List</h3>
                      <p className='text-center text-danger'> {msg} </p>
                      <p className='text-center text-danger'> {mesg} </p>
                      <table className='table table-bordered shadow rounded'>
                        <thead>
                           <tr className='bg-light text-primary'>
                             <td> Id </td>
                            <td> Name</td>
                            <td> Price </td>
                            <td> Photo </td>
                            <td> Details </td>
                            <td> Action </td>
                           </tr>
                        </thead>
                        <tbody>
                            {
                              productlist.map((product,index)=>{
                                return(
                                   <tr key={index}>
                                     <td> {product.id} </td>
                                     <td> {product.name} </td>
                                     <td> {product.price} </td>
                                     <td>
                                       <img src={product.photo} height="50" width="60"/>
                                     </td>
                                     <td> {product.details} </td>
                                     <td>
                                       <button className='btn btn-danger btn-sm'
                                        onClick={deleteItem.bind(this, product.id)}>
                                         <i className='fa fa-trash'></i>
                                       </button>
                                     </td>
                                   </tr>
                                )
                              })
                            }
                        </tbody>
                      </table>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myproduct;