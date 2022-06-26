import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer  />} />
            <Route path='/profile/:userId' element={<ProfileContainer  />} />
            <Route path='/profile' element={<ProfileContainer  />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </div>
  );
}


export default App;
