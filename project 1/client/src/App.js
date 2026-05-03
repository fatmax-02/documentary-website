import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './component/Footer';
import Header from './component/Header';
import Login from './component/Login';
import Document from './component/Document';
import Home from './component/Home';
import Admin from './component/Admin';
import Showuser from './component/Showuser';
import Deleteuser from './component/Deleteuser';
import Putuser from './component/Putuser';
import Updateuser from './component/Updateuser';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/> 
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/document' element={<Document/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/showuser' element={<Showuser/>}></Route>
          <Route path='/deleteuser' element={<Deleteuser/>}></Route>
          <Route path='/putuser' element={<Putuser/>}></Route>
          <Route path='/updateuser' element={<Updateuser/>}></Route>
        </Routes>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
