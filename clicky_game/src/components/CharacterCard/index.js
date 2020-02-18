import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className='card col-4'>
            <button>
                <img alt={props.name} src={props.image} width='100' height='100' />
            </button>

        </div>
    );
}

export default CharacterCard;