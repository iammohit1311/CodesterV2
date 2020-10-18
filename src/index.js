import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const express = require("express")
const app = express()

app.listen(process.env.PORT || 3000);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);