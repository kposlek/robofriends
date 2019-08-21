import React from 'react';
const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src="https://robohash.org/test?size=200x200" />
            <div>
                <h2>Kristian Poslek</h2>
                <p>kristian@poslek.com</p>
            </div>
        </div>
    );
};

export default Card;
