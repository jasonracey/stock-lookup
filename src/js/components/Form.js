import React, { Component } from "react";
import { connect } from "react-redux";
import { addStock } from "../actions/index";

const defaultSymbol = "";
const defaultPrice = 0;

function mapDispatchToProps(dispatch) {
    return {
        addStock: stock => dispatch(addStock(stock))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {symbol: defaultSymbol, price: defaultPrice };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            symbol: event.target.value?.trim() ?? defaultSymbol, 
            price: defaultPrice });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { symbol, price } = this.state;
        this.props.addStock({ symbol, price });
        this.setState({ symbol: defaultSymbol, price: defaultPrice });
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
                <button type="submit">SEARCH</button>
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