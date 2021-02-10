// import React, { Component } from "react";
import "./Game.css";
import Board from "../Board/Board";
import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

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
    const [empty, setEmpty] = useState([-1, -1]);

    const checkClicked = (x, y, player) => {
        return board[x][y] === player;
    };

    const checkGgoLeft = (x, y) => {
        return player[0] === x + 1 && player[1] === y + 1;
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
            if (checkGgoLeft(x, y)) {
                const newBoard = [...board];
                newBoard[x][y] = whosTrun;
                newBoard[player[0]][player[1]] = "X";
                setBoard(newBoard);
                setGreyTurn(false);
                setPlayer([-1, -1]);
            }
        } else {
            // whosTurn chose wrong empty
            setPlayer([-1, -1]);
        }
    };

    console.log(player);
    console.log(empty);
    console.log(greyTurn);
    return (
        <div className="Game">
            <h1>{greyTurn ? "Grey" : "Blue"} Turn</h1>
            <Board click={clickHandler} board={board} greyTurn={greyTurn} />
        </div>
    );
}
