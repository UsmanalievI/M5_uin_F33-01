import './App.css';
import ChangeTitle from './components/changeTitle/ChangeTitle';
import ContactsPage from './page/contactsPage/ContactsPage';
import AboutPage from './page/aboutPage/AboutPage';
import MainPage from './page/mainPage/MainPage';
import HomeWork from './page/homeWork/HomeWork';

function App() {
  return (
    <div className="App">
      {/* <MainPage/>
      <AboutPage/>
      <ChangeTitle/> 
      <ContactsPage/> */}
      <HomeWork/>
    </div>
  );
}

export default App;
