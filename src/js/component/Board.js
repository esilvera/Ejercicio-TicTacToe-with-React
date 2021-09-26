import React, { useState } from "react";

const Board = () => {
	const [square, setSquare] = useState("");
	const [plays, setPlays] = useState(["", "", "", "", "", "", "", "", ""]);

	const move = () => {
		//console.log(setSquare);
		// gurdar jugada en el array plays
		alert("click en el tablero");
	};

	return (
		<>
			<div className="row">
				<div className="col-md-12 text-center">
					<h1>Tic Tac Toe</h1>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div
							id="casilla00"
							onClick={() => {
								setSquare("0");
								move();
							}}>
							0
						</div>
						<div
							id="casilla01"
							onClick={() => {
								setSquare("1");
								move();
							}}>
							1
						</div>
						<div id="casilla02">2</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<div id="casilla03">3</div>
						<div id="casilla04">4</div>
						<div id="casilla05">5</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<div id="casilla06">6</div>
						<div id="casilla07">7</div>
						<div id="casilla08">8</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Board;
