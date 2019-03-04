import React, { Component } from 'react';
import Form from "./Form"

import './App.css';


class App extends Component{
  render() {
    return (
      <div>
      <h3 id="mainHeader">Phone Directory</h3>
        <Form />
      </div>
    )
  }
}

export default App;