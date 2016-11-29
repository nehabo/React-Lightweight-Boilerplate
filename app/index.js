import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Timer from './timer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Login />
      <Timer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
