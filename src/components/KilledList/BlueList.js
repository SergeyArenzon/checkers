import React from "react";
import "./BlueList.css";

export default function BlueList(props) {
    const number = props.number;
   let list= [];
    for (let i = 0; i <number; i++) {
        list.push(<div className='chess'></div>)
        
    }

    return <div className="BlueList">
        {list}
    </div>;
}
