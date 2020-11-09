import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Stock extends Component {
    componentDidMount() {
        this.props.getData("https://api.valentinog.com/api/link/");
    }

    render() {
        return (
            <ul>
                {this.props.stocks.map(article => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        // todo: don't need slice?
        stocks: state.stocksWithPrices.slice(0, 10)
    };
}

export default connect(mapStateToProps, { getData })(Stock);