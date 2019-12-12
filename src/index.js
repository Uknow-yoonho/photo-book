import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { createStore } from './App/Stores/createStores'
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const store = createStore(routingStore)
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <BrowserRouter>
  <Provider {...store}>
  <App history={history}/>
  </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();
