import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const mapStateToProps = state => {
    return { stocks: state.stocks };
};

const ConnectedList = ({ stocks }) => (
    <ul>
        {stocks.map(stock => (
            <li key={stock.symbol}>{`${stock.symbol} ${formatter.format(stock.regularMarketPrice)}`}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps, { getData } )(ConnectedList);

export default List;