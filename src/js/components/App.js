import React from "react";
import List from "./List";
import Form from "./Form";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
  
    return(
      promiseInProgress &&
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "left",
          alignItems: "left"
        }}
      >
        <Loader type="ThreeDots" color="#00A4EF" height="75" width="75" />
      </div>
    );
  }

const App = () => (
    <>
        <div>
            <h2>Look up stock price</h2>
            <Form />
        </div>
        <div>
            <h2>Stock Prices</h2>
            <List />
            <LoadingIndicator/>
        </div>
    </>
);

export default App;