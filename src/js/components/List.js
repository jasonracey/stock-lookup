import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { stocks: state.stocks };
};

const ConnectedList = ({ stocks }) => (
    <ul>
        {stocks.map(stock => (
            <li key={stock.id}>{stock.symbol}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;