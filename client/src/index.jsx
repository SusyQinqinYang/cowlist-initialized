import React from "react";
import ReactDOM from "react-dom";
import NewCow from './NewCow.jsx';
import CowDisplay from './CowDisplay.jsx';
import CowList from './CowList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      currentCow: ''
    };
    this.changeCurrentCow = this.changeCurrentCow.bind(this);
    this.newCowReq = this.newCowReq.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  changeCurrentCow(cow) {
    this.setState({
      currentCow: cow
    });
  }

  newCowReq(newCowObj) {
    axios.post('/api/cows', newCowObj)
      .then(() => {
        this.getCows();
      })
      .catch((err) => {
        console.log('client axios post err', err);
      })
  }

  getCows() {
    return axios.get('/api/cows')
      .then((data) => {
        console.log('data in didmount', data.data);
        this.setState({
          cows: data.data
        })
      })
      .catch((err) => {
        console.log('AXIOS get error', err);
      });
  };

  render() {
    return (
      <div>
        <div className='newCow'>
          <NewCow newCowReq={this.newCowReq} />
        </div>
        <div className='cowDisplay'>
          <CowDisplay currentCow={this.state.currentCow} />
        </div>
        <div>
          <CowList cows={this.state.cows} handleCowLIstEntryClick={this.changeCurrentCow} />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);