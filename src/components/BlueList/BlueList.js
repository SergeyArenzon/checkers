import React from "react";
import "./BlueList.css";

export default function BlueList(props) {
    const number = props.blueKilled;
   let list= [];
    for (let i = 0; i <number; i++) {
        list.push(<div className='blue'></div>)
        
    }

    return <div className="BlueList">
        {list}
    </div>;
}
