console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(List),
    document.getElementById('mount')
  );
});