import { Routes,Route} from 'react-router-dom';
import './App.css';
import SetHeader from './components/Header/Header';
import Navbar from './components/Header/Navbar/Navbar';
import UserHeader from './components/Userpages/UserHeader/UserHeader';
import Books from './components/BookList/BookList';
import AddBook from './components/AddBooks/AddBookForm';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <SetHeader/>
      <Books/> */}
      <Routes>
        <Route path = "/" element = {<SetHeader />}/>
          <Route path = "/addbook" element = {<AddBook />} />
          <Route path='/login'  element = {<Login />}/>
          <Route path='/sign-up'  element = {<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
