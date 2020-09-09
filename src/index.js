import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './tailwind.output.css';

import store from './store/configureStore';
import RouteFile from './components/RouteFile';
import Navbar from './components/ui/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <Router>
        <RouteFile />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
