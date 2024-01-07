import logo from './logo.svg';
import './App.css';
//import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import EmployeeReimbursementForm from './screens/EmployeeReimbursementForm';
import AdminReimbursementForm from './screens/AdminReimbursementForm';
import ReimbursementForm from './screens/ReimbursementForm';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/employee-reimbursement-form" element={<EmployeeReimbursementForm/>} />
          <Route path="/admin-reimbursement-form" element={<AdminReimbursementForm/>} />
          <Route path="/reimbursement-form" element={<ReimbursementForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
