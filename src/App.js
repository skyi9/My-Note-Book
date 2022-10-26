import './App.css';
import AddNotes from './Components/AddNotes';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";
import MyNotes from './Components/MyNotes';
import MyState from './Context/MyState';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
      <MyState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<AddNotes />} />
            <Route exact path='/mynotes' element={<MyNotes />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />
          </Routes>
        </Router>
      </MyState>

    </>
  );
}

export default App;
