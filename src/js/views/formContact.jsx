import { useContext, useState } from "react";
import { Context } from "../store/appContext"
import React from "react";

export const FormAddContact = () => {
  const { store, actions } = useContext(Context);

  const [fullName, setfullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
 
  const handleFullNameChange = (e) => setfullName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  

 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Full Name :', fullName);
    console.log('Address :', address);
    console.log('Email :', email);
    console.log('Phone :', phone);
  };

  return (
    <form
  className=" "
  onSubmit={handleSubmit}
>
  <h1 className="text-center">ADD NEW CONTACT</h1>
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
  </div>
  <div className="mb-3">
    <label htmlFor="InputEmail" className="form-label">Email</label>
    <input
      type="email"
      className="form-control"
      id="InputEmail"
      value={email}
      onChange={handleEmailChange}
      aria-describedby="Email"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="InputPhone" className="form-label">Phone</label>
    <input
      type="text"
      className="form-control"
      id="InputPhone"
      value={phone}
      onChange={handlePhoneChange}
      aria-describedby="Phone"
    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  );
}


