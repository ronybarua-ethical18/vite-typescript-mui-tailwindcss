import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";
import Sidebar from "./components/SIdebar";

function App():JSX.Element {

  return (
    <div className="App text-center">
      <Sidebar />
    </div>
  );
}

export default App;
