const CowListEntry = ({ cow, handleCowLIstEntryClick }) => {
    return (
        <div className='cow-list-entry'>
            <div className='cow-list-entry-title' onClick={() => handleCowLIstEntryClick(cow)}>
                {cow.name}
            </div>
        </div>
    )
}

export default CowListEntry;