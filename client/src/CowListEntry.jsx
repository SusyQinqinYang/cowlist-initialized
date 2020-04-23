import React from 'react';

const CowListEntry = ({ cow, handleCowLIstEntryClick }) => {
    return (
        <div className='cow-list-entry'>
            <div className='cow-list-entry-title' onClick={() => handleCowLIstEntryClick(cow)}>
                <li>{cow.name}</li>
            </div>
        </div>
    )
}

export default CowListEntry;