import React, { useEffect, useState } from "react";
import "./Game.css";
import Board from "../Board/Board";

export default function Game() {
    const [greyTurn, setGreyTurn] = useState(true);
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
    const [chess, setChess] = useState(null);
    const [dest, setDest] = useState(null);

    useEffect(() => {
        console.log("------------------------start----------------------");
        console.log("[Game] did update");
        console.log("chess: " + chess);
        console.log("dest: " + dest);
        console.log("greyTurn: " + greyTurn);
        console.log("------------------------start----------------------");
    });

    const checkGgoLeft = (curr, dest) => {
        return curr[0] - 1 === dest[0] && curr[1] - 1 === dest[1];
    };
    const checkGgoRight = (curr, dest) => {
        return curr[0] - 1 === dest[0] && curr[1] + 1 === dest[1];
    };
    const checkGgoLeftTwice = (curr, dest) => {
        return curr[0] - 2 === dest[0] && curr[1] - 2 === dest[1];
    };
    const checkGgoRightTwice = (curr, dest) => {
        return curr[0] - 2 === dest[0] && curr[1] + 2 === dest[1];
    };

    const checkBgoLeft = (curr, dest) => {
        return curr[0] + 1 === dest[0] && curr[1] - 1 === dest[1];
    };
    const checkBgoRight = (curr, dest) => {
        return curr[0] + 1 === dest[0] && curr[1] + 1 === dest[1];
    };
    const checkBgoLeftTwice = (curr, dest) => {
        return curr[0] + 2 === dest[0] && curr[1] - 2 === dest[1];
    };
    const checkBgoRightTwice = (curr, dest) => {
        return curr[0] + 2 === dest[0] && curr[1] + 2 === dest[1];
    };

    

    if (chess && dest) {
        if (greyTurn) {
            //  G turn
            if (checkGgoLeft(chess, dest)) {
                const newBoard = [...board];
                newBoard[dest[0]][dest[1]] = "G";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(false);
                setChess(null);
                setDest(null);
            } else if (checkGgoRight(chess, dest)) {
                const newBoard = [...board];
                newBoard[dest[0]][dest[1]] = "G";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(false);
                setChess(null);
                setDest(null);
            } else if (
                checkGgoLeftTwice(chess, dest) &&
                board[chess[0] - 1][chess[1] - 1] === "B"
            ) {
                console.log("gltG");
                const newBoard = [...board];
                setChess(null);
                setDest(null);
                newBoard[dest[0]][dest[1]] = "G";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(false);
                newBoard[chess[0] - 1][chess[1] - 1] = "X";
            } else if (
                checkGgoRightTwice(chess, dest) &&
                board[chess[0] - 1][chess[1] + 1] === "B"
            ) {
                console.log("gltG");
                const newBoard = [...board];
                setChess(null);
                setDest(null);
                newBoard[dest[0]][dest[1]] = "G";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(false);
                newBoard[chess[0] - 1][chess[1] + 1] = "X";
            }
        } else {
            //  B turn

            if (checkBgoLeft(chess, dest)) {
                // alert("cBgL");
                const newBoard = [...board];
                newBoard[dest[0]][dest[1]] = "B";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(true);
                setChess(null);
                setDest(null);
            } else if (checkBgoRight(chess, dest)) {
                const newBoard = [...board];
                newBoard[dest[0]][dest[1]] = "B";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(true);
                setChess(null);
                setDest(null);
            } else if (
                checkBgoRightTwice(chess, dest) &&
                board[chess[0] + 1][chess[1] + 1] === "G"
            ) {
                const newBoard = [...board];
                setChess(null);
                setDest(null);
                newBoard[dest[0]][dest[1]] = "B";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(false);
                newBoard[chess[0] + 1][chess[1] + 1] = "X";
            } else if (
                checkBgoLeftTwice(chess, dest) &&
                board[chess[0] + 1][chess[1] - 1] === "G"
            ) {
                const newBoard = [...board];
                setChess(null);
                setDest(null);
                newBoard[dest[0]][dest[1]] = "B";
                newBoard[chess[0]][chess[1]] = "X";
                setGreyTurn(false);
                newBoard[chess[0] + 1][chess[1] - 1] = "X";
            }
        }
    } else {
        //  user didnt chose dest + chess
        console.log(
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        );
    }

    console.log("---------------end render----------------");

    console.log("[Game] did update");
    console.log("chess: " + chess);
    console.log("dest: " + dest);
    console.log("greyTurn: " + greyTurn);
    console.log("greyTurn: " + greyTurn);

    console.log("---------------end render----------------");
    return (
        <div className="Game">
            <h1>{greyTurn ? "Grey" : "Blue"}</h1>
            <Board
                board={board}
                chessClick={setChess}
                distClicked={setDest}
                greyTurn={greyTurn}
            />
        </div>
    );
}
