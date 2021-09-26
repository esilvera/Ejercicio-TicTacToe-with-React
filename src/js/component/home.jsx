import React, { useState } from "react";
import Form from "./Form";
import Board from "./Board";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center mt-5">
				<h1>Componente Home</h1>
			</div>
			<Form />;
			<Board />;
		</>
	);
};

export default Home;
