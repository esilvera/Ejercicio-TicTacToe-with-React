import React, { useState } from "react";
import Form from "./Form";
import Board from "./Board";

//create your first component
const Home = () => {
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [play, setPlay] = useState("");
	const [plays, setPlays] = useState(["", "", "", "", "", "", "", "", ""]);

	const [winNroPlay, setWinNroPlay] = useState(0);
	const [winner, setWinner] = useState(false);

	const reset = () => {
		setPlayer1("");
		setPlayer2("");
		setPlay("");
		setPlays(["", "", "", "", "", "", "", "", ""]);
		setWinNroPlay(0);
		setWinner(false);
	};

	const move = (play, position) => {
		let newArray = [...plays];

		if (newArray[position] == "" && !winner) {
			setWinNroPlay(winNroPlay + 1);
			newArray[position] = play;
			setPlays(newArray);

			let winner = checkWinner(position, newArray);
			setWinner(winner);

			if (!winner) {
				if (play == "X") {
					setPlay("0");
				} else {
					setPlay("X");
				}
			}
		}
	};

	const checkWinner = (pos, arr) => {
		if (pos == 0) {
			if (arr[0] == arr[1] && arr[1] == arr[2]) {
				return true;
			} else if (arr[0] == arr[4] && arr[4] == arr[8]) {
				return true;
			} else if (arr[0] == arr[3] && arr[3] == arr[6]) {
				return true;
			}
		}
		if (pos == 1) {
			if (arr[1] == arr[0] && arr[0] == arr[2]) {
				return true;
			} else if (arr[1] == arr[4] && arr[4] == arr[7]) {
				return true;
			}
		}
		if (pos == 2) {
			if (arr[2] == arr[1] && arr[1] == arr[0]) {
				return true;
			} else if (arr[2] == arr[4] && arr[4] == arr[6]) {
				return true;
			} else if (arr[2] == arr[5] && arr[3] == arr[8]) {
				return true;
			}
		}
		if (pos == 3) {
			if (arr[3] == arr[0] && arr[0] == arr[6]) {
				return true;
			} else if (arr[3] == arr[4] && arr[4] == arr[5]) {
				return true;
			}
		}
		if (pos == 4) {
			if (arr[4] == arr[5] && arr[5] == arr[3]) {
				return true;
			} else if (arr[4] == arr[1] && arr[1] == arr[7]) {
				return true;
			} else if (arr[4] == arr[0] && arr[0] == arr[8]) {
				return true;
			} else if (arr[4] == arr[2] && arr[2] == arr[6]) {
				return true;
			}
		}
		if (pos == 5) {
			if (arr[5] == arr[2] && arr[2] == arr[8]) {
				return true;
			} else if (arr[5] == arr[4] && arr[4] == arr[3]) {
				return true;
			}
		}
		if (pos == 6) {
			if (arr[6] == arr[3] && arr[3] == arr[0]) {
				return true;
			} else if (arr[6] == arr[4] && arr[4] == arr[2]) {
				return true;
			} else if (arr[6] == arr[7] && arr[7] == arr[8]) {
				return true;
			}
		}
		if (pos == 7) {
			if (arr[7] == arr[6] && arr[6] == arr[8]) {
				return true;
			} else if (arr[7] == arr[4] && arr[4] == arr[1]) {
				return true;
			}
		}
		if (pos == 8) {
			if (arr[8] == arr[5] && arr[5] == arr[2]) {
				return true;
			} else if (arr[8] == arr[7] && arr[7] == arr[6]) {
				return true;
			} else if (arr[8] == arr[4] && arr[4] == arr[0]) {
				return true;
			}
		}
		return false;
	};

	return (
		<>
			{player1 !== "" && player2 !== "" && play !== "" ? (
				<Board
					play={play}
					plays={plays}
					move={move}
					player1={player1}
					player2={player2}
					winNroPlay={winNroPlay}
					winner={winner}
					reset={reset}
				/>
			) : (
				<Form
					setPlayer1={setPlayer1}
					setPlayer2={setPlayer2}
					setPlay={setPlay}
				/>
			)}
		</>
	);
};
export default Home;
