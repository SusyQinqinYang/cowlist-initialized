import React from 'react';
import CowListEntry from './CowListEntry.jsx';

const CowList = ({ cows, handleCowLIstEntryClick }) => {
    return (
        <div className='cow-list'>
            <h4>Cow Name List</h4>
            {cows.map((cow, ind) =>
                (<CowListEntry
                    key={ind}
                    cow={cow}
                    handleCowLIstEntryClick={handleCowLIstEntryClick}
                />)
            )}
        </div>
    )
}

export default CowList;