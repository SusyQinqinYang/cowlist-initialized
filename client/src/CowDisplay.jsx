const CowDisplay = ({ currentCow }) => {
    return (
        !currentCow ? <div>Please wait...</div> :
            <div className='cow-display'>
                <div className='cow-display-title'>
                    {currentCow.title}
                </div>
                <div className='cow-display-description'>
                    {currentCow.description}
                </div>
            </div>
    )
}

export default CowDisplay;