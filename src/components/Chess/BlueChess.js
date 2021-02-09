import React from "react";
import "./BlueChess.css";

export default function BlueChess(props) {
    const isMyTurn = props.isMyTurn;

    return (
        <div
            className="BlueChess"
            onClick={() => {
                if (isMyTurn) {
                    props.click(props.position);
                }
            }}
        ></div>
    );
}