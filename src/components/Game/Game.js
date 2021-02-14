// import React, { Component } from "react";
import "./Game.css";
import Board from "../Board/Board";
import BlueList from "../BlueList/BlueList";
import GreyList from "../GreyList/GreyList";
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
    const [blueKilled, setBlueKilled] = useState(0);
    const [greyKilled, setGreyKilled] = useState(0);
    const [gameOver, setGameOver] = useState(0);

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
            setBlueKilled(blueKilled + 1);

            newBoard[x][y] = "G";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x + 1][y - 1] = "X";
            setBoard(newBoard);
            setGreyTurn(false);
            setPlayer([-1, -1]);
            if (blueKilled === 11) {
                setGameOver(1);
            }
        } else if (
            //  G go left twice and kill
            player[0] === x + 2 &&
            player[1] === y + 2 &&
            board[x + 1][y + 1] === "B"
        ) {
            const newBoard = [...board];
            setBlueKilled(blueKilled + 1);
            newBoard[x][y] = "G";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x + 1][y + 1] = "X";
            setBoard(newBoard);
            setGreyTurn(false);
            setPlayer([-1, -1]);
            if (blueKilled === 11) {
                setGameOver(1);
            }
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
            setGreyKilled(greyKilled + 1);

            newBoard[x][y] = "B";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x - 1][y - 1] = "X";
            setBoard(newBoard);
            setGreyTurn(true);
            setPlayer([-1, -1]);
            if (greyKilled === 11) {
                setGameOver(2);
            }
        } else if (
            //  B go left twice and kill
            player[0] === x - 2 &&
            player[1] === y + 2 &&
            board[x - 1][y + 1] === "G"
        ) {
            console.log("----------------------------------------------");
            const newBoard = [...board];
            setGreyKilled(greyKilled + 1);
            newBoard[x][y] = "B";
            newBoard[player[0]][player[1]] = "X";
            newBoard[x - 1][y + 1] = "X";
            setBoard(newBoard);
            setGreyTurn(true);
            setPlayer([-1, -1]);
            if (greyKilled === 11) {
                setGameOver(2);
            }
        } else {
            // B chose wrong empty
            setPlayer([-1, -1]);
        }
    };

    const clickHandler = (x, y) => {
        let whosTrun = "G";
        let enemy = "B";
        if (!greyTurn) {
            whosTrun = "B";
            enemy = "G";
        }

        if (gameOver === 0) {
            if (player[0] === -1 && checkClicked(x, y, whosTrun)) {
                console.log("first");
                setPlayer([x, y]);
            } else if (player[0] !== -1 && checkClicked(x, y, whosTrun)) {
                setPlayer([x, y]);
            } else if (!checkClicked(x, y, enemy)) {
                if (greyTurn) {
                    gMoveHandler(x, y);
                } else {
                    bMoveHandler(x, y);
                }
            } else {
            }
        }
    };


    //  Handles restart button click
    const restartHandle = () => {
        setBoard([
            [null, "B", null, "B", null, "B", null, "B"],
            ["B", null, "B", null, "B", null, "B", null],
            [null, "B", null, "B", null, "B", null, "B"],
            ["X", null, "X", null, "X", null, "X", null],
            [null, "X", null, "X", null, "X", null, "X"],
            ["G", null, "G", null, "G", null, "G", null],
            [null, "G", null, "G", null, "G", null, "G"],
            ["G", null, "G", null, "G", null, "G", null],
        ]);

        setPlayer([-1, -1]);
        setBlueKilled(0);
        setGreyKilled(0);
        setGameOver(0);
        setGreyTurn(true)
    };

    // CHECK FOR GAME OVER & TURN MANAGMENT TITLE
    let gameManager = null;
    let titleColor = "";
    if (gameOver === 0) {
        if (greyTurn) {
            gameManager = "Grey Turn";
            titleColor = "greyTitle";
        } else {
            gameManager = "Blue Turn";
            titleColor = "blueTitle";
        }
    } else {
        if (gameOver === 1) {
            gameManager = "Grey Won!!!";
            titleColor = "greyTitle";
        } else {
            gameManager = "Blue Won!!!";
            titleColor = "blueTitle";
        }
    }
    return (
        <div>
            <h1 className={["title", titleColor].join(" ")} title>
                {gameManager}
            </h1>
            <div className="Game">
                <GreyList greyKilled={greyKilled} />

                <Board
                    click={clickHandler}
                    board={board}
                    greyTurn={greyTurn}
                    focused={player}
                />
                <BlueList blueKilled={blueKilled} />
            </div>
            <button className="restart_btn" onClick={restartHandle}>RESTART</button>
        </div>
    );
}
