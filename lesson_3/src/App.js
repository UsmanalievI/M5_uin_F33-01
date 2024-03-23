import './App.css';
import AboutPage from './page/aboutPage/AboutPage';
import UserInfo from './page/userInfo/UserInfo';
import UsersPage from './page/usersPage.js/UsersPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersPage/>}/>
        <Route path='/:id' element={<UserInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
