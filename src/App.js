import React, { Component } from 'react';
// import './App.css';
import './site.css';

class App extends Component {
  state = {
    stockList: [
      {
        symbol: "",
        price: 0,
      },
    ],
  };

// I will need some sort of <form> or <input> field to narrow down the selection
// Values from Form/Input will need to search the API and retrieve
// Retrieved values need to modify the State, which then modifies Render

  // barAttribute = () => {
  //   console.log('***Bar Attribute?');
  //   this.setState({
  //     symbol: this.state.symbol,
  //     price: this.state.price,
  //   });
  // }

  componentDidMount = () => {
    fetch("https://financialmodelingprep.com/api/v3/stock/real-time-price")
      .then(response => response.json())
      .then(data => {
        console.log('Did component mount?', data);
// make a newList Michael's suggestion
// specify whick symbols I want from the stockList Michael's suggestion
// push the items in the newList
        let newList = [];
        for (let item of data.stockList) {
          if (item.symbol === "GHM"
                || item.symbol === "ACP") {
              newList.push(item);
          }
        }
// make newList become stockList Michael's suggestion
        this.setState({
          stockList: newList,
        });
      });
  }
  render() {
    return (
      <div className="App">
      {/* <div> */}
        <h1>Title Goes Here</h1>
        <div className="MainContentBorder">
            <div className="BarsInGraph">
              {
                this.state.stockList.map(data => (
                  <div className="BarsInGraph" style={{height: data.price + "%"}}>
                    <h2 className="BarNamePosition">{data.symbol}</h2> 
                    </div>
                ))
              }
            </div>
        </div>
      </div>
    );
  }
}

export default App;


            // <div className="BarsInGraph BarTwo"
            // onClick="console.log('Clicked on Wendys');
            // alert('A share of Wendys stock is worth: $19.65')">
            //    <h2 className="BarNamePosition">Wendy's</h2>
            // </div>
            // <div className="BarsInGraph BarThree"
              // onClick="console.log('Clicked on Chipotle');
              // alert('A share of Chipotle stock is worth: $817')">
              //     <h2 className="BarNamePosition">Chipotle</h2>
            // </div>
            // <div className="BarsInGraph BarFour" 
              // onClick="console.log('Clicked on Pepsi');
              // alert('A share of PepsiCo stock is worth: $129.94')">
              //     <h2 className="BarNamePosition">Pepsi</h2>
            // </div>
            // <div className="BarsInGraph BarFive" 
              // onClick="console.log('Clicked on Coke');
              // alert('A share of Coca-Cola stock is worth: $351.67')">
              //     <h2 className="BarNamePosition">Coca-Cola</h2>
            // </div>
        // </div>
      // </div>