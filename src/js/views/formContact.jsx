import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

export const FormAddContact = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "luisGalvan",
    });

    // Maneja los cambios en el formulario
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id) {
            await actions.addContact(form);
        } else {
            await actions.updateContact(form, id);
        }
        navigate("/");
    };

    useEffect(() => {
            setForm({
                name: "",
                email: "",
                phone: "",
                address: "",
                agenda_slug: "luisGalvan",
            });
      
            if(store.contactos && id){
              if (store.contactos.length > 0){
                  const result = store.contactos.find(item => item.id == id)
                  if(result){
                      setForm(result)
                  }
              }
          }
    }, [store.contactos, id]);

    return (
        <div className="container">
            <h1>{!id ? "Add New Contact" : `Editing Contact: ${id}`}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={form.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
};
