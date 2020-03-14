import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Developer from './component/Developer/Developer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main-layout ">
      <Header></Header>
      <Developer></Developer>
    </div>
  );
}

export default App;
