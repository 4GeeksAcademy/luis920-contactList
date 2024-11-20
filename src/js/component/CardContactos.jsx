import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.createAgenda();
    actions.getContacts();
    
    
  }, []);

  if (store.contactos.length === 0) {
    return (
      <div className="container text-center">
        <h1 className="text-light">Actualmente no existen contactos.</h1>
      </div>
    );
  }

  
  return (
    <>
      {store.contactos.map((item, index) => {
        return (
          <div className="card mx-auto bg-dark text-light" key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://picsum.photos/200/300"
                  className="img-card"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text"><strong> <i className="fa-solid fa-location-dot"></i>Address:</strong>  {item.address}</p>
                  <p className="card-text"><strong> <i className="fa-solid fa-phone"></i> Phone:</strong> {item.phone}</p>
                  <p className="card-text"><strong><i className="fa-solid fa-envelope"></i> Email:</strong> {item.email}</p>
                </div>
                <div className="iconos">
                  <button
                    className="btn btn-primary btn-sm w-40"
                    onClick={() => {
                      if (window.confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
                        actions.removeContact(item.id);
                      }
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>

                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-primary btn-sm w-40"
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
