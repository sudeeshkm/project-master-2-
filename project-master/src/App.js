import logo from './logo.svg';
import './App.css';
import Home  from './pages/home/Home';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/navbar/Navbar1';
import Admin from './components/Admin/admin';
import Application from './components/Appform/Application1';
import { Link } from 'react-router-dom';
import StudentHome from './components/studenthome/stdhome';
import Status from './components/Studentstatus/stdstatus';
import Batchmanagerslist from './components/Batchmanagerslist/batchmanangerslist';
import Courses from './components/courses/courses';
import BatchManager from './components/Batchmanagershome/batchmanagers';
import Batchnav from './components/batchnav/batchnav';
import Adminnav from './components/adminnav/adminnav';
import { History } from './components/history/history';
import { Pending } from './components/pending/pending';

function App() {
  return (
    <div className="App">
     
     <Router>

     <Routes>
     <Route path="/" element={<> <Navbar1/><Home /></>} />
     <Route path="/login" element={< ><Login  /> </>} />
     <Route path="/Studenthome" element={<> <StudentHome /></>} />
     <Route path="/studentapplication" element={<> <Application /></>} />
     <Route path="/studentstatus" element={<> <Status /></>} />
     <Route path="/bmh" element={<> <BatchManager/><Batchnav /></>} />
     <Route path="/history" element={<> <Batchnav/> <History /></>} />
     <Route path="/pending" element={<> <Batchnav /><Pending /></>} />
     <Route path="/Admin" element={<> <Admin /></>} />
     <Route path="/bmlist" element={<> <Adminnav /><Batchmanagerslist /></>} />
     <Route path="/courselist" element={<> <Adminnav/><Courses /></>} />
     </Routes>

     </Router>

     


     
     
    </div>
  );
}

export default App;
