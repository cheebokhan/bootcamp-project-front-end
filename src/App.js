import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddBooks from './components/AddBooks/AddBookFrom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UserDashboard from './components/Userpages/UserDashboard';
import BookDetails from './components/BookDetails/BookDetails';
import UserHome from './components/Userpages/Userindex';
import Editbook from './components/AddBooks/EditBook';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div>
      <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/addbook" element = {<AddBooks />} />
          <Route path='/login'  element = {<Login/>}/>
          <Route path='/signup'  element = {<Signup />}/>
          <Route path = '/aboutus' element = {<AboutUs />}/>


          <Route path='/userdashboard'  element = {<UserDashboard />}/>
          <Route path = '/bookdetails/:id' element = {<BookDetails />}/>
          <Route path = '/bookshelf' element = {<UserHome />}/>
          <Route path = '/editbook/:id' element = {<Editbook />}/>

      </Routes>
    </div>
  );
}

export default App;
