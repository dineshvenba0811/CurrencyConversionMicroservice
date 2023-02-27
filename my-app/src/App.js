import './App.css';
import React from "react";
import Indexpage from './components/Indexpage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path='/index' element={ <Indexpage/> } />
         </Routes>
        </BrowserRouter>
  </div>
  )
}

export default App;
