import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timetable from './timetableadmin/timetable';
import FacultyTable from './timetableadmin/facultytable';
import CreateTimetable from './timetableadmin/creatett';
import MasterFaculty from './timetableadmin/masterfaculty';
import AddFaculty from './timetableadmin/addfaculty';
import './App.css';



function App() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <Router>
      <div className="app">
        {/* here */}
        <h1 className='app-head'>Time-Table</h1>
        {/* in every page there is no need of this link... */}
        {
          click && <Link className='app-link' to="/create-timetable" onClick={handleClick}>Create Timetable</Link>
        }



        <Routes>
          <Route path="/tt/:generatedLink" element={<Timetable />} />
          <Route path="/facultytable" element={<FacultyTable />} />
          <Route path="/create-timetable" element={<CreateTimetable />} />
          <Route path="/tt/:generatedLink/addfaculty" element={<AddFaculty />} />
          <Route path="/tt/:generatedLink/masterfaculty" element={<MasterFaculty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
