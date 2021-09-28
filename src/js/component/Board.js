import { resetWarningCache } from "prop-types";
import React, { useState } from "react";
import Form from "./Form";

const Board = ({
	play,
	plays,
	move,
	player1,
	player2,
	winNroPlay,
	winner,
	reset
}) => {
	console.log("Winnroplay tiene: " + winNroPlay);
	console.log("Winner tiene: " + winner);
	return (
		<>
			<div className="row">
				<div className="col-md-12 text-center my-3">
					<h1>Tic Tac Toe</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center">
					{winNroPlay <= 9 ? (
						winner ? (
							play == "X" ? (
								<h3>"The Winner is " {player1}</h3>
							) : (
								<h3>"The Winner is " {player2}</h3>
							)
						) : play == "X" ? (
							<h4>It's Turn {player1}</h4>
						) : (
							<h4>It's Turn {player2}</h4>
						)
					) : (
						<h3>"No One Winner"</h3>
					)}
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div
							id="casilla00"
							onClick={() => {
								move(play, 0);
							}}>
							{plays[0]}
						</div>
						<div
							id="casilla01"
							onClick={() => {
								move(play, 1);
							}}>
							{plays[1]}
						</div>
						<div
							id="casilla02"
							onClick={() => {
								move(play, 2);
							}}>
							{plays[2]}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<div
							id="casilla03"
							onClick={() => {
								move(play, 3);
							}}>
							{plays[3]}
						</div>
						<div
							id="casilla04"
							onClick={() => {
								move(play, 4);
							}}>
							{plays[4]}
						</div>
						<div
							id="casilla05"
							onClick={() => {
								move(play, 5);
							}}>
							{plays[5]}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<div
							id="casilla06"
							onClick={() => {
								move(play, 6);
							}}>
							{plays[6]}
						</div>
						<div
							id="casilla07"
							onClick={() => {
								move(play, 7);
							}}>
							{plays[7]}
						</div>
						<div
							id="casilla08"
							onClick={() => {
								move(play, 8);
							}}>
							{plays[8]}
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center">
					<button
						className="btn btn-primary my-3"
						onClick={() => {
							reset();
						}}>
						It´s Over
					</button>
				</div>
			</div>
		</>
	);
};
export default Board;
