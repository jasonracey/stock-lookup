import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
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

render (
  <Provider store={store}>
    <App/>
    <LoadingIndicator/>
  </Provider>,
  document.getElementById("root")
);
