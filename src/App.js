import React, {Suspense} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer/>}/>
              <Route path='/profile/:userId' element={<ProfileContainer/>}/>
              <Route path='/profile' element={<ProfileContainer/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/login' element={<LoginPage/>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
