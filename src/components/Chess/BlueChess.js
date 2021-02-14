import React from "react";
import "./BlueChess.css";
import "./FocusedChess.css";

export default function BlueChess(props) {
    const isMyTurn = props.isMyTurn;
    let style = "BlueChess";
    if (
        props.player[0] === props.position[0] &&
        props.player[1] === props.position[1]
    ) {
        style = "BlueChess FocusedChess";
    }


    return (
        <div
            className={style}
            onClick={() => {
                if (isMyTurn) {
                    props.click(props.position[0], props.position[1]);
                }
            }}
        >
            {props.isQueen ? <div className="crown"></div> : null}
        </div>
    );
}
