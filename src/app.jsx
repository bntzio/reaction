const React = require('react');
const ReactDOM = require('react-dom');

// components
const Main = require('Main');

// load styles
require('applicationStyles');

// render app
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
