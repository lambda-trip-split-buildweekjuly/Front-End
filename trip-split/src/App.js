import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>App.js is rendering</h1>
    </div>
  );
}

function mapStateToProps(state){
  console.log(state)
  return {}
}

export default connect(mapStateToProps, {})(App);
