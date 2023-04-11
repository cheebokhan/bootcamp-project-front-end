import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddBooks from './components/AddBooks/AddBookFrom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import BookDetails from './components/BookDetails/BookDetails';

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
          <Route path='/signup'  element = {<Signup />}/>
          <Route path = "/bookdetails" element = {<BookDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
