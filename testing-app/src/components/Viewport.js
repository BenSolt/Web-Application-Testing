import React from 'react';

const Viewport = props => {
    return (
        <div className='container'>

            <h1>BaseBall App</h1>
            <h2>Hits: {props.viewHits}</h2>
            <h2>Balls: {props.viewBalls}</h2>
            <h2>Strikes: {props.viewStrikes}</h2>

           
            
        </div>
    )
}

export default Viewport;