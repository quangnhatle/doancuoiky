import { Route, Routes} from 'react-router';
import React from 'react';
import './App.css';
import Home from "./Components/Home/Home"
import AddUser from './Components/AddUser/AddUser';
import Users from './Components/UserDetails/Users';
import UpdateUsers from './Components/UpdateUser/UpdateUser';
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mainhome" element={<Home/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/userdetails" element={<Users/>}/>
          <Route path="/userdetails/:id" element={<UpdateUsers/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
