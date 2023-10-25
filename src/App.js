import './App.css';
import AllProjects from './Components/AllProjects';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/projects' element={<AllProjects/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
