import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);
  


  return (
    <>
      {store.contactos.map((item, index) => {
        return (
          <div className="card mx-auto" key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  className="img-card"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Address: {item.address}</p>
                  <p className="card-text">Phone: {item.phone}</p>
                  <p className="card-text">Email: {item.email}</p>
                </div>
                <div className="iconos">
                  <button onClick={() => actions.removeContact(item.id)} >
                    <i className="fas fa-trash"></i>
                  </button>
                  <Link
                        to={`/edit/${item.id}`}
                        className="btn btn-warning btn-sm w-40"
                        aria-label="Edit contact"
                      >
                       <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                 
                    
                 
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
