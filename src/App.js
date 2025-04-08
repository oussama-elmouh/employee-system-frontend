import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard'; // Correctement importé
import NoMatch from './pages/noMatch/NoMatch'; // Correctement importé

function App() {
    return (
        <div>
            <Header />
             <Routes> 
                <Route path="/" element={<Dashboard />} />
                 <Route path="*" element={<NoMatch />} /> 
            </Routes>
        </div>
    );
}

export default App;
