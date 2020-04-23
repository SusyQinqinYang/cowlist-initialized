import React from 'react';

// https://reactjs.org/docs/forms.html
class NewCow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.submitNewCow = this.submitNewCow.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    };

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    };

    submitNewCow(e) {
        // e.preventDefault();
        this.props.newCowReq(this.state);
    };

    render() {
        return (
            <form onSubmit={this.submitNewCow}>
                <label>
                    Name
                    <br />
                    <input type="text" width='700' value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <br />
                <label>
                    Description
                    <br />
                    <textarea type="comments" width='700' height='700' value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                </label>
                <br />
                <input type="submit" value="submit" />
            </form>
        )
    }
}


export default NewCow;