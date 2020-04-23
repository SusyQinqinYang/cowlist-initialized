import React from 'react';

const CowList = ({ cows, handleCowLIstEntryClick }) => {
    return (
        <div className='cow-list'>
            <h4>Cow Name List</h4>
            <ul>
                {cows.map((cow, ind) =>
                    (<li className='cow-list-entry-title' onClick={() => handleCowLIstEntryClick(cow)} key={ind}>{cow.name}</li>)
                )}
            </ul>
        </div>
    )
}

export default CowList;