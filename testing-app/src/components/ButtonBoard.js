import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// import {addHit} from './utils/addHit';


const ButtonBoard = props => {

    return(
<div className='btncontainer'>

    <button className='btn' onClick={props.buttonboardstrike}>Strikes</button>
    <button className='btn' onClick={props.buttonboardballs}>Balls</button>
    <button className='btn' onClick={props.buttonboardfoul}>Foul</button>
    <button className='btn' onClick={props.buttonboardhit}>Hit</button>

    <button className='btn2' onClick={props.viewClear}>Clear All</button>

</div>
    )
}

export default ButtonBoard;