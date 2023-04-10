import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddBooks from './components/AddBooks/AddBookFrom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      {/* <Navbar/>
      <SetHeader/>
      <Books/> */}
      <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/addbook" element = {<AddBooks />} />
          <Route path='/login'  element = {<Login/>}/>
          <Route path='/sign-up'  element = {<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
