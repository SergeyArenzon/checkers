import React, { useEffect, useState } from "react";
import "./Game.css";
import Board from "../Board/Board";

export default function Game() {
    const [greyTurn, setGreyTurn] = useState(null);
    const [board, setBoard] = useState([]);
    const [clickedChess, setClickedChess] = useState(null);
    const [clickedDest, setClickedDest] = useState(null);

    useEffect(() => {
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

        setGreyTurn(true);
    }, []);




    const compareArr = ([x,y], [z, w] ) => {
        return (x === z && y === w);
    } 


    if (greyTurn) {
        const greyChess = clickedChess;
        const greyDest = clickedDest;

        console.log("greyChess:" + greyChess);
        console.log("greyDest:" + greyDest);

        if (greyChess && greyDest) {
            const goLeft = [greyChess[0] - 1, greyChess[1] - 1];
            const goRight = [greyChess[0] - 1, greyChess[1] + 1];

            console.log("goRight:" + goRight);
            console.log("goLeft:" + goLeft);

            if(compareArr(goLeft, greyDest)){

                const newBoard = board;
                newBoard[goLeft[0]][goLeft[1]] = 'G';
                newBoard[greyChess[0]][greyChess[1]] = 'X';
                setGreyTurn(false);

            }
            else if (compareArr(goRight, greyDest)){
                const newBoard = board;
                newBoard[goRight[0]][goRight[1]] = 'G';
                newBoard[greyChess[0]][greyChess[1]] = 'X';
                setGreyTurn(false);

            }
            
        }
    }


    if (!greyTurn) {
        const blueChess = clickedChess;
        const blueDest = clickedDest;

        console.log("blueChess:" + blueChess);
        console.log("blueDest:" + blueDest);

        if (blueChess && blueDest) {
            const goLeft = [blueChess[0] + 1, blueChess[1] - 1];
            const goRight = [blueChess[0] + 1, blueChess[1] + 1];

            console.log("goRight:" + goRight);
            console.log("goLeft:" + goLeft);

            if(compareArr(goLeft, blueDest)){

                const newBoard = board;
                newBoard[goLeft[0]][goLeft[1]] = 'B';
                newBoard[blueChess[0]][blueChess[1]] = 'X';
                setGreyTurn(true);

            }
            else if (compareArr(goRight, blueDest)){
                const newBoard = board;
                newBoard[goRight[0]][goRight[1]] = 'B';
                newBoard[blueChess[0]][blueChess[1]] = 'X';
                setGreyTurn(true);

                
            }
            
        }
    }

    return (
        <div className="Game">
            <h1>{greyTurn ? "Grey" : "Blue"}</h1>
            <Board
                board={board}
                chessClick={setClickedChess}
                distClicked={setClickedDest}
                greyTurn={greyTurn}
            />
        </div>
    );
}
