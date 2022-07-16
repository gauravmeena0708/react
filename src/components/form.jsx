import React, { Component } from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Gaurav' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>        <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
                        <option value="Gaurav">Gaurav</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;