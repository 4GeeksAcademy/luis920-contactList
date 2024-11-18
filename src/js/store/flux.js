const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos:[],
		},
		actions: {
			 //obtener lista de contactos
			getContacts: async () => {
			  try {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/luisGalvan/contacts`);      
				if (!response.ok) {
				  throw new Error('No se pudo obtener la información');
				}
				const data = await response.json();
				setStore({ contactos: data.contacts });  
			  } catch (error) {
				console.error('Error al obtener el personaje:', error);
			  }
			},
			
			},
			
			

				
				
			
		
	};
};

export default getState;
