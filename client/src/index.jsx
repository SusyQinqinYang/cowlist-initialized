import React from "react";
import ReactDOM from "react-dom";
import NewCow from './NewCow.jsx';
import CowDisplay from './CowDisplay.jsx';
import CowList from './CowList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      currentCow: null
    }
  }

  changeCurrentCow(cow) {
    this.setState({
      currentCow: cow
    });
  }

  render() {
    return (
      <div>
        <nav className='navbar'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <NewCow />
            </div>
          </div>
        </nav>
        <div className='row'>
          <div className='col-md-7'>
            <CowDisplay currentCow={this.state.currentCow} />
          </div>
          <div className='col-md-5'>
            <CowList cows={this.state.cows} handleCowLIstEntryClick={this.changeCurrentCow.bind(this)} />
          </div>
        </div>
      </div>

    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);