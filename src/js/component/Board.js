import React, { useState } from "react";

const Board = () => {
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
						<div id="casilla01">1</div>
						<div id="casilla02">2</div>
						<div id="casilla03">3</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<div id="casilla04">4</div>
						<div id="casilla05">5</div>
						<div id="casilla06">6</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<div id="casilla07">7</div>
						<div id="casilla08">8</div>
						<div id="casilla09">9</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Board;
