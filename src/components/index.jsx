
import React from "react";
import '../styles/stylesComponents.css';


export function Accordian({ question, showMore, moreInfo, onClick }){

    return(
        <div className="accordian" onClick={onClick}>
            <div>
                {question}
                <i className="bi bi-file-plus"></i>
            </div>
            {showMore && (<div>{moreInfo}</div>)}
        </div>
    );
}

export function Button({onClick}){
    return(
        <>
            <button onClick={onClick}>Multi showing</button>
        </>
    );
}