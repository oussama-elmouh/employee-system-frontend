import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard'; // Correctement importé
import NoMatch from './pages/noMatch/NoMatch'; // Correctement importé
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';


function App() {
    return (
        <div>
            <Header />
             <Routes> 
                <Route path="/" element={<Dashboard />} />
                 <Route path="/employee" element={<PostUser/>} /> 
                 <Route path="/employee/:id" element={<UpdateUser/>} /> 
                 <Route path="*" element={<NoMatch />} /> 
            </Routes>
        </div>
    );
}

export default App;
