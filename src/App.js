import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login/login';
import Home from './Home';
import Navbar from './Navbar/Navbar.js';
import Inventory from './Inventory';

// Protected Route component
const ProtectedRoute = ({ children }) => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        return <Navigate to="/" />;
    }
    return children;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Home />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/Inventory" 
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Inventory />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;
