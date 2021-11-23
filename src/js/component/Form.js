import React, { useState } from "react";

//const Form = ({ setPlayer1, setPlayer2, setPlay }) => {
const Form = props => {
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
								onChange={
									evento =>
										props.setPlayer1(evento.target.value)
									//setPlayer1(evento.target.value)
								}
							/>
						</div>
						<div className="col-md-6 my-3">
							<input
								type="text"
								className="form-control"
								placeholder="Jugador 02"
								onChange={
									evento =>
										props.setPlayer2(evento.target.value)
									//setPlayer2(evento.target.value)
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
									props.setPlay("X");
									//setPlay("X");
								}}
								className="btn btn-primary">
								X
							</button>
						</div>
						<div className="col-md-6">
							<button
								onClick={() => {
									props.setPlay("0");
									//setPlay("0");
								}}
								className="btn btn-primary">
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
