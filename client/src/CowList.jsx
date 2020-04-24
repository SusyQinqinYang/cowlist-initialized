import React from 'react';
import CowListEntry from './CowListEntry.jsx';


class CowList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log('cow0', this.props.cows[0]);
        return (
            <div className='cow-list'>
                <h4>Cow Name List</h4>
                <ul>
                    {this.props.cows.map((cow) =>
                        <CowListEntry
                            cow={cow} key={cow.id}
                            handleCowLIstEntryClick={this.props.handleCowLIstEntryClick}
                            deleteCow={this.props.deleteCow}
                        />
                    )}
                </ul>
            </div >
        );
    };
};


export default CowList;