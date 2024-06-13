import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AxiosDemo from './axiosdemo';
import MyProfile from './myprofile';
import Viewstudent from './Viewstudent';
import Viewmark from './viewmarks';
import FollowingList from './Follow';


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/axiosdemo' element={<AxiosDemo/>}/>
        <Route path='/Viewstudent' element={<Viewstudent/>}/>
        <Route path='/viewmarks' element={<Viewmark/>}/>
        <Route path='/Follow' element={<FollowingList/>}/>





      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));