import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "" };
  }
  checkhandier = (event) => {
    // this.setState({})
    console.log(event.target.value);
    if (event.target.value % 2 == 0) {
      console.log("It is a even Number");
    } else {
      console.log("it is a Odd Number");
    }
  };

  render() {
    return (
      <>
        <div>
          <pre>{JSON.stringify(this.state.number)}</pre>
          <input type="number" id="even" onInput={this.checkhandier} />
          <button>Check</button>
        </div>
      </>
    );
  }
}
export default Test;
