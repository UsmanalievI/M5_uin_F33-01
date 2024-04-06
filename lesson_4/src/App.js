import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import UserListPage from './pages/userListPage/UserListPage';
import Menu from './components/menu/Menu';
import ReegistrationPage from './pages/registrationPage/ReegistrationPage';



function App() {
  return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route index element={<UserRegisterPage/>}/>
                <Route path={`/users`} element={<UserListPage/>}/>
                <Route path={`/registration`} element={<ReegistrationPage/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
