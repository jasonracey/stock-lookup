import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Stock extends Component {
    componentDidMount() {
        this.props.getData("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=MSFT,AAPL,AMZN&region=US");
    }

    render() {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return (
            <ul>
                {this.props.stocksWithPrices.map(stock => (
                    <li key={stock?.symbol}>{`${stock.symbol} ${formatter.format(stock.ask)}`}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    console.log(JSON.stringify(state.stocksWithPrices));
    return {
        stocksWithPrices: state.stocksWithPrices
    };
}

export default connect(mapStateToProps, { getData })(Stock);