import CowListEntry from './CowListEntry.jsx';

const CowList = ({ cows, handleCowLIstEntryClick }) => {
    return (
        <div className='cow-list'>
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