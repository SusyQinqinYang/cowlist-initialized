import React from 'react';
import axios from 'axios';

const CowListEntry = ({ cow, handleCowLIstEntryClick, deleteCow }) => {
    function updateCow() {
        let newName = prompt("Please update your cow's name", `${cow.name}`);
        if (newName != null) {
            axios({
                method: 'put',
                url: '/api/cows/',
                params: {
                    id: cow._id,
                    name: newName
                }
            })
                .then(() => { console.log('updated successfully') })
                .catch((err) => { console.log(err) });
        }
    };

    return (
        <li className='cow-list-entry-title' onClick={() => handleCowLIstEntryClick(cow)} >
            {cow.name}
            <button onClick={updateCow}>Edit</button>
            <button value={cow._id} onClick={(e) => { deleteCow(e, cow._id) }}>Delete</button>
        </li>
    );
};

export default CowListEntry;