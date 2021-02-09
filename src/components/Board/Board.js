import React, { useState, useEffect } from "react";
import "./Board.css";
import BlueChess from "../Chess/BlueChess";
import GreyChess from "../Chess/GreyChess";

export default function Board(props) {
    useEffect(() => {
        console.log("[Board] did update");
    });


    console.log(props.greyTurn ? "G turn in board" : "B turn in board");
    const boardVisual = props.board.map((row, rowIndex) => {
        return (
            <div className="row">
                {row.map((cube, colIndex) => {
                    
                    if (cube) {
                        
                        if (cube === "G") {
                            return (
                                <div className="col black">
                                    <GreyChess
                                        position={[rowIndex, colIndex]}
                                        click={props.chessClick}
                                        isMyTurn={props.greyTurn ? true : false}
                                    />
                                </div>
                            );
                        } else if (cube === "B") {
                            return (
                                <div className="col black">
                                    <BlueChess
                                        position={[rowIndex, colIndex]}
                                        click={props.chessClick}
                                        isMyTurn={props.greyTurn ? false : true}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className="col black"
                                    onClick={() =>
                                        props.distClicked([rowIndex, colIndex])
                                    }
                                ></div>
                            );
                        }
                    } else {
                        return <div className="col white"> {cube}</div>;
                    }
                })}
            </div>
        );
    });

    return <div>{boardVisual}</div>;
}
