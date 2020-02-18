import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="container wrapper">
            <div className='row'>
                <button>
                    <div className='card col-4'>
                        <img alt={props.name} src={props.image} width='200' height='200' />
                    </div>
                </button>

            </div>

        </div>

    );
}

export default CharacterCard;