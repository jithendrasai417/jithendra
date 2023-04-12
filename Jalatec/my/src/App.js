import Authentication from "./Components/Authentication";
import './App.css';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import EmployeSearch from "./Components/EmployeSearch";
import EmployeCreate from './Components/EmployeCreate';
import EmployeEdit from './Components/EmployeEdit';
function App() {
  return (
    <div>
     {/* <Authentication/> */}
     <Router>
      <Routes>
        <Route path='/' element = {<Authentication/>}/>
        <Route path="/search" element = {<EmployeSearch/>}/>
        <Route path='/create' element = {<EmployeCreate/>}/>
        <Route path='/Edit' element= {<EmployeEdit/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
