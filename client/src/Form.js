import React, { Component } from 'react';

import './App.css';

class Form extends Component {
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

    onAddNew = () => {
        document.getElementById("mainForm").style.display = "block";
        document.getElementById("addNewButton").style.display = "none";

    }

    onSubmit = (e) => {
        e.preventDefault();
        document.getElementById("mainForm").style.display = "none";
        document.getElementById("addNewButton").style.display = "block";

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
            <div className="">
                <button id="addNewButton" onClick={this.onAddNew}>Add New</button>
                <form ref="mainForm" className="mainForm" id="mainForm">
                    <div>
                        <label>Name:</label>
                        <br />
                        <input ref="name" type="text" placeholder="Name" required/>

                    </div>
                    <div>
                        <label>Phone:</label>
                        <br />
                        <input ref="phone" type="tel" placeholder="Phone" required/>

                    </div>
                    <br />
                    <div>
                        <button type="submit" onClick={this.onSubmit} id="submitButton">Submit</button>

                    </div>

                    Name: {this.state.name}
                    Phone: {this.state.phone}
                </form>
                <pre>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {allData.map((data, i) =>
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.phone}</td>
                                    <td> <button onClick={() => this.onRemove(i)} id="remove">Delete</button></td>
                                </tr>

                            )}
                        </tbody>
                    </table>

                </pre>

            </div>
        );
    }
}

export default Form;
