import { useContext, useState } from "react";
import { Context } from "../store/appContext"
import React from "react";

export const FormAddContact = () => {
  const { store, actions } = useContext(Context);

  const [fullName, setfullName] = useState('');
  const [address, setAddress] = useState('');
  
 
  const handleFullNameChange = (e) => setfullName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  

 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Full Name :', fullName);
    console.log('Address :', address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="InputFullName" className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="InputFullName"
          value={fullName}
          onChange={handleFullNameChange}
          aria-describedby="FullName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="InputAddress" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="InputAddress"
          value={address}
          onChange={handleAddressChange}
          aria-describedby="Address"
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
       
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}


