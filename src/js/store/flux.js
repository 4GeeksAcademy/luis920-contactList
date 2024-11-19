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
			}
		}
	};
};

export default getState;
