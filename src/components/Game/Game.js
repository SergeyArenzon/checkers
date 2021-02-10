// import React, { Component } from "react";
import "./Game.css";
import Board from "../Board/Board";
import React, { useState } from "react";

export default function Game() {
    const [board, setBoard] = useState([
        [null, "B", null, "B", null, "B", null, "B"],
        ["B", null, "B", null, "B", null, "B", null],
        [null, "B", null, "B", null, "B", null, "B"],
        ["X", null, "X", null, "X", null, "X", null],
        [null, "X", null, "X", null, "X", null, "X"],
        ["G", null, "G", null, "G", null, "G", null],
        [null, "G", null, "G", null, "G", null, "G"],
        ["G", null, "G", null, "G", null, "G", null],
    ]);
    const [greyTurn, setGreyTurn] = useState(true);
    const [player, setPlayer] = useState([-1, -1]);
    // const [empty, setEmpty] = useState([-1, -1]);

    const checkClicked = (x, y, player) => {
        return board[x][y] === player;
    };

    const gMoveHandler = (x, y) => {
        if (player[0] === x + 1 && player[1] === y + 1) {
            // G go left
            const newBoard = [...board];
            newBoard[x][y] = "G";
            newBoard[player[0]][player[1]] = "X";
            setBoard(newBoard);
            setGreyTurn(false);
            setPlayer([-1, -1]);
        } else if (player[0] === x + 1 && player[1] === y - 1) {
            // G go right
            const newBoard = [...board];
            newBoard[x][y] = "G";
            newBoard[player[0]][player[1]] = "X";
            setBoard(newBoard);
            setGreyTurn(false);
            setPlayer([-1, -1]);
        } else if (
            player[0] === x + 2 &&
            player[1] === y - 2 &&
            board[x + 1][y - 1] === "B"
        ) {
            //  G go right twice and kill
            const newBoard = [...board];
            newBoard[x][y] = "G";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x + 1][y - 1] = "X";
            setBoard(newBoard);
            setGreyTurn(false);
            setPlayer([-1, -1]);
        } else if (
            //  G go left twice and kill
            player[0] === x + 2 &&
            player[1] === y + 2 &&
            board[x + 1][y + 1] === "B"
        ) {
            const newBoard = [...board];
            newBoard[x][y] = "G";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x + 1][y + 1] = "X";
            setBoard(newBoard);
            setGreyTurn(false);
            setPlayer([-1, -1]);
        } else {
            // G chose wrong empty
            setPlayer([-1, -1]);
        }
    };

    const bMoveHandler = (x, y) => {
        if (player[0] === x - 1 && player[1] === y + 1) {
            // B go left
            const newBoard = [...board];
            newBoard[x][y] = "B";
            newBoard[player[0]][player[1]] = "X";
            setBoard(newBoard);
            setGreyTurn(true);
            setPlayer([-1, -1]);
        } else if (player[0] === x - 1 && player[1] === y - 1) {
            // G go right
            const newBoard = [...board];
            newBoard[x][y] = "B";
            newBoard[player[0]][player[1]] = "X";
            setBoard(newBoard);
            setGreyTurn(true);
            setPlayer([-1, -1]);
        } else if (
            player[0] === x - 2 &&
            player[1] === y - 2 &&
            board[x - 1][y - 1] === "G"
        ) {
            //  G go right twice and kill
            const newBoard = [...board];
            newBoard[x][y] = "B";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x - 1][y - 1] = "X";
            setBoard(newBoard);
            setGreyTurn(true);
            setPlayer([-1, -1]);
        } else if (
            //  G go left twice and kill
            player[0] === x - 2 &&
            player[1] === y + 2 &&
            board[x - 1][y + 1] === "G"
        ) {
            const newBoard = [...board];
            newBoard[x][y] = "B";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x - 1][y + 1] = "X";
            setBoard(newBoard);
            setGreyTurn(true);
            setPlayer([-1, -1]);
        } else {
            // B chose wrong empty
            setPlayer([-1, -1]);
        }
    };

    const clickHandler = (x, y) => {
        let whosTrun = "G";
        let enemy = "G";
        if (!greyTurn) {
            whosTrun = "B";
            enemy = "G";
        }
        if (player[0] === -1 && checkClicked(x, y, whosTrun)) {
            console.log("first");
            setPlayer([x, y]);
        } else if (!checkClicked(x, y, enemy)) {
            console.log("sec");
            if (greyTurn) {
                gMoveHandler(x, y);
            } else {
                bMoveHandler(x, y);
            }
        } else {
        }
    };

    console.log(player);
    console.log(greyTurn);
    return (
        <div className="Game">
            <h1>{greyTurn ? "Grey" : "Blue"} Turn</h1>
            <Board
                click={clickHandler}
                board={board}
                greyTurn={greyTurn}
                focused={player}
            />
        </div>
    );
}
