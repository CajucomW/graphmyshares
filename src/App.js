import React, { Component } from 'react';
// import './App.css';
import './site.css';

class App extends Component {
    // Most common lifecycle method: componentDidMount
  componentDidMount = () => {
    // Gets run right away. Typically used to go to APIs to get data to
    // display.  In this case, fetching a repo list from GitHub.
    fetch("https://financialmodelingprep.com/api/v3/stock/real-time-price")
      .then(response => response.json())
      .then(data => {
        console.log('Did component mount?', data);
  //       this.setState({
  //           results: data,
  //           isLoading: false,
        });
  //     });
  }
  render() {
    return (
      // <div className="App">
        <div className="MainContentBorder">
          {/* <h1 class="MainTitle">Stock Market Prices</h1> */}
            <div className="BarsInGraph BarOne" 
            onClick="console.log('Clicked on McDondald');
            alert('A share of McDonalds Corp stock is worth: $219.71')">
                <h2 className="BarNamePosition">McDonald's</h2>
            </div>
            <div className="BarsInGraph BarTwo" 
            onClick="console.log('Clicked on Wendys');
            alert('A share of Wendys stock is worth: $19.65')">
                <h2 className="BarNamePosition">Wendy's</h2>
            </div>
            <div className="BarsInGraph BarThree" 
            onClick="console.log('Clicked on Chipotle');
            alert('A share of Chipotle stock is worth: $817')">
                <h2 className="BarNamePosition">Chipotle</h2>
            </div>
            <div className="BarsInGraph BarFour" 
            onClick="console.log('Clicked on Pepsi');
            alert('A share of PepsiCo stock is worth: $129.94')">
                <h2 className="BarNamePosition">Pepsi</h2>
            </div>
            <div className="BarsInGraph BarFive" 
            onClick="console.log('Clicked on Coke');
            alert('A share of Coca-Cola stock is worth: $351.67')">
                <h2 className="BarNamePosition">Coca-Cola</h2>
            </div>
          </div>
      // </div>
    );
  }
}  /*
  doFetch will do the fetch to the API based on state, updating the state with
  the books retrieved.
  */
  // doFetch = () => {
  //   const url = this.getURL();
  //   console.log('making query to ', url);
  //   this.setState({isLoading: true});
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Calculate the total pages, based on the page size and the number of
  //       // results
  //       const totalPages = Math.ceil(data.numFound / PAGE_SIZE);
  //       console.log('data', data);

  //       // Set the state of the new information, notably the total number of
  //       // pages, and the array of data we got back
  //       this.setState({
  //         totalPages: totalPages,
  //         books: data.docs,
  //         isLoading: false,
  //       });
  //     });
  // }
// ** Example of Fetching Data from API **
    // function doFetch() {
    //     fetch('https://ghibliapi.herokuapp.com/films')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             state.data = data;
    //         });
    // }

    // fetch(`https://api.github.com/users/${this.state.username}/repos`)
    //   .then(response => response.json())
    //   .then(data => {

    //     // Check for errors:
    //     if (data.message ===  "Not Found") {
    //       this.setState({
    //           results: [],
    //           isLoading: false,
    //       });
    //       return;
    //     }

export default App;
