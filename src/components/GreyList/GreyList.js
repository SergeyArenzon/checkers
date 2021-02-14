import React from "react";
import "./GreyList.css";

export default function GreyList(props) {
    const number = props.greyKilled;
    let list = [];
    for (let i = 0; i < number; i++) {
        list.push(<div className="grey"></div>);
    }

    return <div className="GreyList">{list}</div>;
}
