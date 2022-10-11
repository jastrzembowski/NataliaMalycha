import React from 'react';
import "./staytuned.scss"

const StayTuned = () => {
    return (
        <div className='stay-tuned__box'>
            <h3>Pozostańmy w kontakcie</h3>
            <form>
                <input type="text" placeholder='IMIĘ'></input>
                <input type="email" placeholder="EMAIL"></input>
                <button type="submit">Zapisz</button>
            </form>
        </div>
    );
};

export default StayTuned;