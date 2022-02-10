import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import './CardRow.css';




function CardRow({cardImg, name}) {
    return (
        <div className='cardrow'>
            <img src={cardImg} alt="" />            
        </div>
    
    )
}

export default CardRow;
