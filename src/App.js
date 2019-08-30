import React, { Component } from 'react';
// import './App.css';
import './site.css';

class App extends Component {
  state = {
    searchTerm: '',
    stockList: [
      {
        symbol: "",
        price: '',
      },
    ],
  };

  // componentDidMount = () => {
  //   fetch("https://financialmodelingprep.com/api/v3/stock/real-time-price")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Did component mount?', data);
// make a newList Michael's suggestion
// specify whick symbols I want from the stockList Michael's suggestion
// push the items in the newList
        // let newList = [];
        // for (let item of data.stockList) {
        //   if (item.symbol === "CMG"
        //         || item.symbol === "MCD"
        //         || item.symbol === "WEN"
        //         || item.symbol === "COKE"
        //         || item.symbol === "PEP") {
        //       newList.push(item);
        //   }
        // }
// make newList become stockList Michael's suggestion
  //       this.setState({
  //         stockList: newList,
  //       });
  //       console.log('this.state.stockList', this.state.stockList);
  //     });
  // }

  newOnSearchTermChange = (ev) => {
    let value = ev.target.value;
    console.log('is this working?');
    this.setState({
       searchTerm: value,
    });
    console.log('is setState working?', this.state.searchTerm);
  }

  onSubmit = () => {
    let listPlusInput = this.state.stockList;
    console.log('is the button working?', this.state.searchTerm);
    fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price/' + this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
          listPlusInput.push(data)
          console.log('this is the data', data);
          this.setState({
            stockList: listPlusInput,
          });
        })
  }

  render() {
    return (
      <div className="App">
        <h1>Title Goes Here</h1>
        <div className="MainContentBorder">
          {
            this.state.stockList.map(data => (
              <div className="BarsInGraph" style={{height: (data.price / 30) + "%"}}>
                <h2 className="BarNamePosition">{data.symbol}<br /> {data.price}</h2>
                </div>
                ))
            }
        </div>
        <input
            placeholder="Enter Stock Symbol Here"
            value={this.state.searchTerm}
            onChange={this.newOnSearchTermChange} />

        <button onClick={() => this.onSubmit()}>Submit</button>

          
      </div>
    );
  }
}

export default App;