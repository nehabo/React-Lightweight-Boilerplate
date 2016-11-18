import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Neha',
  lastName: 'Bomma',
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root'),
);
