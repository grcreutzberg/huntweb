import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header';
import Main from './pages/main/';
import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

/*
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello Gustavo</h1>
        </header>
      </div>
    );
  }
}
*/

export default App;
