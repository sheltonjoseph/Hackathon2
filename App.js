import './App.css';
import* as React from 'react';
import { BrowserRouter as Switch,Routes, Route, Link,useParams, useHistory } from "react-router-dom";
import Axios from 'axios';
import { Pizzalist } from "./Pizzalist";
import { HomePage } from "./HomePage";

function App() {
  return (
    <div className="App">
      
       <Routes>
       <Route path = "/" element={<HomePage/>}/>
     </Routes>
      
     <Routes>
       <Route path = "/pizzalist" element={<Pizzalist/>}/>
     </Routes>
        
    </div>
  );
}

export default App;


