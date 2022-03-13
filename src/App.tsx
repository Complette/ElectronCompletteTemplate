import React from 'react';
import logo from './logo-writed.png';

import './index.css'

function App() {
  return (
    <div className="App">
      <div className=" bg-purple-500">
        <div className="flex justify-center items-center h-[100vh] w-[100vw] flex-col">
          <img src={logo} alt="Complette"  width="50%"/>
          <h1 className=" font-sans text-white text-2xl">Simple Electron + React + TypeScript + Tailwind Boilerplate</h1>
          <span className="font-sans text-white text-xl">Edit App.tsx to start</span>
        </div>
      </div>
    </div>
  );
}

export default App;


// test