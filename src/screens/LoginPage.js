import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import usersData from './users.json';
import EmployeeReimbursementForm from './EmployeeReimbursementForm';
import AdminReimbursementForm from './AdminReimbursementForm';

function LoginPage() {

  //const usersData = require('./users.json');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [role,setRole] = useState('');
  //const [role1, setRole1] = useState('admin' );
  //const [role2, setRole2] = useState('employee' );
 // const [role1, setRole1] = useState('admin');

  const navigate = useNavigate();

  const handleLogin = async () => {
    

    try {
      setLoading(true);

      console.log('Login attempt with:', email, password, role);

      const user = usersData.users.find(
        (u) => u.email === email && u.password === password
      );

      console.log('Found user:', user);

      if (user && user.role === role) {
        console.log('Logged in as:', user.role);
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log('Stored user:', localStorage.getItem('currentUser'));
        //role = currentUser.users.role;
        //navigate('/reimbursement-form'); 
        if (role === 'employee') {
          console.log('Navigating to employee page...');
          navigate('/employee-reimbursement-form')
        } else{
          console.log('Navigating to admin page...');
          navigate('/admin-reimbursement-form')
        }
          
      } else {
        console.log('User not found or invalid role for the given credentials.');
        setError(true);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <div className="bs">
            <h2 style={{marginBottom:'25px'}}>Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>
              Role:
              <select value={role} onChange={(e) => setRole(e.target.value)} style={{marginTop: '10px', marginLeft:'10px'}}>
                <option>Select</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <br/>
            <button className="btn btn-primary mt-3" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
