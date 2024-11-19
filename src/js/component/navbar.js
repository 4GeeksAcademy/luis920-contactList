import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar  mb-3">
			<Link to="/">
				
			</Link>
			<div >
				<Link to="/formContact">
					<button className="btn btn-primary ">Agregar contacto</button>
				</Link>
			</div>
		</nav>
	);
};
