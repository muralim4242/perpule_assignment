import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
