import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import UserListPage from './pages/userListPage/UserListPage';
import Menu from './components/menu/Menu';
import Slidebar from './components/slidebar/Slidebar';
import Albom from './pages/albom/Albom';



function App() {
  return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route index element={<UserRegisterPage/>}/>
                <Route path={`/users`} element={<UserListPage/>}/>
                <Route path={`/albom`} element={<Albom/>}/>
            </Routes>
        <Slidebar/>
        </BrowserRouter>
  );
}

export default App;
