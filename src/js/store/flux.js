const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],
		},
		actions: {
			// Obtener lista de contactos
			getContacts: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/luisGalvan/contacts`)
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo obtener la información');
						}
						return response.json();
					})
					.then(data => {
						setStore({ contactos: data.contacts });
					})
					.catch(error => {
						console.error('Error al obtener la información:', error);
					});
			},

			// Eliminar un contacto
			removeContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/luisGalvan/contacts/${id}`, {
					method: "DELETE",
				})
					.then(response => {
						if (response.ok) {
							const updatedContacts = getStore().contactos.filter(contact => contact.id !== id);
							setStore({ contactos: updatedContacts });
						} else {
							console.error("Error al eliminar el contacto:");
						}
					})
					.catch(error => {
						console.error("Error al eliminar el contacto:", error);
					});
			},
			addContact: (contacto) => {
                const store = getStore()


                fetch("https://playground.4geeks.com/contact/agendas/luisGalvan/contacts", {
                    method: "POST",
                    body: JSON.stringify(contacto),
                    headers: { "Content-Type": "application/json" }
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data);
                        if (data) {
                            setStore({ contactos: [...store.contactos, data] });
                        } else {
                            console.error("no se agrego el contacto");
                        }
                    })
                    .catch((error) => console.log("Error fetching contacts:", error));
            },
			updateContact: (contact,id) => {
                const store = getStore()


                fetch(`https://playground.4geeks.com/contact/agendas/luisGalvan/contacts/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                })
                    .then((result) => {
                        if (result.ok) {
                            return result.json()
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data); 
                        if (data) {
                            const updatedContacts = store.contactos.map(item => {
                                if(item.id==id){
                                    item=data
                                }
                                return item
                            })
                            setStore({ contactos: updatedContacts });
                        } else {
                            console.error("no se actualizo el contacto");
                        }
                    })
                    .catch((error) => console.log("Error fetching contacts:", error));
            },
		}
	};
};

export default getState;
