
import './App.css';
import { Adduser } from './components/Addusers';

import {Navbar} from "./components/layout/Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
 return(
   <>
     <BrowserRouter>
   <Navbar/>
   <Routes>
    
     <Route path='/' element={<Adduser/>}></Route> 
   </Routes>
   </BrowserRouter>
  
   </>
 )
    

}

export default App;
