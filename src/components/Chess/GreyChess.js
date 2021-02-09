import "./GreyChess.css";
import React from "react";

export default function GreyChess(props) {
    const isMyTurn = props.isMyTurn;

    return (
        <div
            className="GreyChess"
            onClick={() => {
                if (isMyTurn) {
                    props.click(props.position);
                } 
            }}
        ></div>
    );
}
