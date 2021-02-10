import "./GreyChess.css";
import "./FocusedChess.css";
import React from "react";

export default function GreyChess(props) {
    const isMyTurn = props.isMyTurn;
    let style = 'GreyChess';
    if(props.player[0] === props.position[0] &&  props.player[1] === props.position[1]) {
        style = 'GreyChess FocusedChess';
    }

    return (
        <div
            className= {style}
            onClick={() => {
                if (isMyTurn) {
                    props.click(props.position[0], props.position[1]);
                } 
            }}
        ></div>
    );
}
