import React, { Component } from "react";
import Data from "./cities.json";
class Filter extends Component {
  state = {
    search: Data,
  };
  searchHandler = (e) => {
    if (e.target.value !== "") {
      let results = Data.filter((city) => {
        return city.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      this.setState({ search: results });
    }
  };
  render() {
    return (  
      <div>
        <center>
          <h3>Enter Your City:</h3>
          <input type="text" onChange={this.searchHandler} />
          <br />
          {this.state.search.length > 0
            ? this.searchHandler.map((city) => {
                return (
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      margin: "10px",
                      maxWidth: "70%",
                    }}
                  >
                    {city.name}
                  </div>
                );
              })
            : null}
        </center>
      </div>
    );
  }
}


export default Filter