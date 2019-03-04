import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      allData: []
    }
  }

  componentDidMount() {
    this.refs.name.focus();
}

  onSubmit = (e) => {
    e.preventDefault();

    let allData = this.state.allData;
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;

    let data = {
      name, phone
    }
    allData.push(data);

    this.setState({
      allData: allData
    });

    this.refs.mainForm.reset();
    this.refs.name.focus();
  }

  onRemove = (i) => {
    let allData = this.state.allData;
    allData.splice(i, 1);
    this.setState({
      allData: allData
    })
  }

  render() {
    let allData = this.state.allData;
    return (
      <div className="App">
        <form ref="mainForm" className="mainForm">
          <input ref="name" type="text" placeholder="Name"  className="formField" />

          <input ref="phone" type="text" placeholder="Phone"  className="formField" />
          <button type="submit" onClick={this.onSubmit} className="button">Submit</button>
        </form>
        <pre>
          {allData.map((data, i) => 
            <li key={i} className="list">{data.name}, {data.phone}
              <button onClick={() =>this.onRemove(i)} className="remove">Delete</button>
            </li>
          
          )}
        </pre>
      </div>
    );
  }
}

export default App;
