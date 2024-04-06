import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PostPage from './pages/postPage/PostPage';




function App() {
  return (
        <BrowserRouter>
        <PostPage/>
            <Routes>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
