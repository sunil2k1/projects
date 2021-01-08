import React from "react";
import Main from "./components/MainComponent.js";
import "./App.css";
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;