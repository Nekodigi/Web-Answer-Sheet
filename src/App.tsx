import { Typography } from "@mui/material";
import React from "react";
import { Layout } from "./components/template/Layout";
import { MarkSheet } from "./components/template/Marksheet";
import logo from "./logo.svg";
//import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Typography>
          <MarkSheet />
        </Typography>
      </Layout>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
