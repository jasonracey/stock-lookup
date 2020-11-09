import React from "react";
import List from "./List";
import Form from "./Form";
import Stock from "./Stocks";

const App = () => (
    <>
        <div>
            <h2>Stock Prices</h2>
            <List />
        </div>
        <div>
            <h2>Look up stock price</h2>
            <Form />
        </div>
        <div>
            <h2>Stocks With Prices</h2>
            <Stock />
        </div>
    </>
);

export default App;