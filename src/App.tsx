import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App text-center">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <Typography variant="h1">This is the boilerplate of Vite, Typescript, Mui and Tailwind CSS3</Typography>
        <h1 className="text-3xl font-bold text-red-400">Let's GO</h1>
        {/* <Button variant="contained">Contained</Button> */}
        
      </div>
    </div>
  );
}

export default App;
