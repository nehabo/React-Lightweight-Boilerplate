import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Elif',
  lastName: 'Denizer',
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>merhaba {formatName(user)}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
