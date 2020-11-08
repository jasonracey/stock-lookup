import React, { Component } from "react";
import { connect } from "react-redux";
import { addStock } from "../actions/index";

// maps redux dispatch to react props
function mapDispatchToProps(dispatch) {
    return {
        addStock: stock => dispatch(addStock(stock))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value?.trim() ?? "" });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { symbol } = this.state;
        this.props.addStock({ symbol });
        this.setState({ symbol: "" });
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
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

//the first argument for connect must be null when mapStateToProps is absent
const Form = connect(
    null, 
    mapDispatchToProps
)(ConnectedForm);

export default Form;