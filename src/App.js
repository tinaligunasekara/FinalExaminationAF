import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Layout/>
        </Router>
    </div>
  );
}

export default App;
