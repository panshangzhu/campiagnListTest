import React from 'react';
// External
import ReactDOM from 'react-dom';
import {ConnectedRouter} from "connected-react-router";
import { Provider } from "react-redux";
// Internal
import AppTheme from "theme/AppTheme"
import store, {AppHistory} from "./redux/Store";
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <AppTheme isAnimationDisabled={false}>
      <ConnectedRouter history={AppHistory}>
        <App />
      </ConnectedRouter>
    </AppTheme>
  </Provider>,
  document.getElementById('root')
);
