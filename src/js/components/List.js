import React from "react";
import { connect } from "react-redux";

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
            <li key={stock.id}>{`${stock.symbol} ${formatter.format(stock.price)}`}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;