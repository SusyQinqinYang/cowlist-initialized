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
      currentCow: 'Please waite...'
    };
    this.changeCurrentCow = this.changeCurrentCow.bind(this);
    this.newCowReq = this.newCowReq.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
  }
  //testing
  componentDidMount() {
    console.log('getCow promise?', this.getCows());
    this.getCows();
    console.log('did mount state', this.state.cows);
  };

  getCows() {
    axios.get('/api/cows')
      .then((data) => {
        console.log('data from req', data.data);
        this.setState({
          cows: data.data
        })
      })
      .catch((err) => {
        console.log('AXIOS get error', err);
      });
    console.log('cows after setState', this.state.cows);
  };

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

  deleteCow(e, id) {
    e.preventDefault();
    axios.delete(`/api/cows/${id}`)
      .then(() => { this.getCows() })
      .catch((err) => { console.log('delete err', err) });
  };

  render() {
    return (
      <div>
        <div className='cowDisplay'>
          <CowDisplay currentCow={this.state.currentCow} />
        </div>
        <div>
          <CowList
            cows={this.state.cows}
            handleCowLIstEntryClick={this.changeCurrentCow}
            deleteCow={this.deleteCow}
          />
        </div>
        <div className='newCow'>
          <h4>Creat Your Cow</h4>
          <NewCow newCowReq={this.newCowReq} />
        </div>
      </div>
    );
  }
}

//testing github bku
var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);