import React from 'react';

const CowDisplay = ({ currentCow }) => {
    return (
        <div className='cow-display'>
            <h4>Cow Detail</h4>
            <p>{currentCow.name}</p>
            <p>{currentCow.description}</p>
        </div>
    )
}

export default CowDisplay;