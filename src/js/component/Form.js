import React, { useState } from "react";

const Form = () => {
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [play, setPlay] = useState("");

	const jugar = () => {};

	return (
		<>
			<div className="container-fluid">
				<div className="col-md-12 text-center">
					<div className="row">
						<h3>CHOOSE YOUR WEAPON</h3>
					</div>
				</div>
				<div className="col-md-12 d-flex justify-content-center">
					<div className="row">
						<div className="col-md-6 my-3">
							<input
								type="text"
								className="form-control"
								placeholder="Jugador 01"
								onChange={evento =>
									setPlayer1(evento.target.value)
								}
							/>
						</div>
						<div className="col-md-6 my-3">
							<input
								type="text"
								className="form-control"
								placeholder="Jugador 02"
								onChange={evento =>
									setPlayer2(evento.target.value)
								}
							/>
						</div>
					</div>
				</div>
				<div className="col-md-12 d-flex justify-content-center">
					<div className="row">
						<div className="col-md-6">
							<button
								onClick={() => {
									setPlay("X");
									jugar();
								}}
								className="btn btn-light">
								X
							</button>
						</div>
						<div className="col-md-6">
							<button
								onClick={() => {
									setPlay("0");
									jugar();
								}}
								className="btn btn-light">
								0
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Form;
