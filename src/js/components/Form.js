import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const emptyString = "";

let isButtonDisabled = true;

function mapDispatchToProps(dispatch) {
    return { getData: symbol => dispatch(getData(symbol)) };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = { symbol: emptyString };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const symbol = event.target.value?.trim() ?? emptyString;
        isButtonDisabled = symbol === emptyString;
        this.setState({ [event.target.id]: symbol });
    }

    handleSubmit(event) {
        // prevent button click from submitting the form
        event.preventDefault();
        this.props.getData(this.state.symbol);
        this.setState({ symbol: emptyString });
        isButtonDisabled = true;
    }

    render() {
        const { symbol } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="symbol">Symbol</label>
                    <input
                        type="text"
                        id="symbol"
                        value={symbol}
                        onChange={this.handleChange}
                    />
                </div>
                <button 
                    type="submit"
                    disabled={isButtonDisabled}
                >SEARCH</button>
            </form>
        );
    }
}

//the first argument for connect must be null when mapStateToProps is absent
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;