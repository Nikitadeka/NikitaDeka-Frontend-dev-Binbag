import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReimbursementForm.css';

// Define the EmployeesDetails component
const EmployeesDetails = () => {
  // Add logic to fetch employees details or use sample data
  const employeesData = [
    { id: 1, name: 'ruchi deka',    joiningDate: '2018-08-09', phoneNumber: '9876543567', email: 'ruchi@example.com',     address: 'Delhi' },
    { id: 2, name: 'anku barman',   joiningDate: '2021-02-07', phoneNumber: '8765234598', email: 'anku@example.com',      address: 'Guwahati' },
    { id: 3, name: 'manvi singh',   joiningDate: '2017-05-05', phoneNumber: '9854321654', email: 'manvi@example.com',     address: 'Jorhat' },
    { id: 4, name: 'rihana sharma', joiningDate: '2016-01-09', phoneNumber: '7765432768', email: 'rihana@example.com',    address: 'Dibrugarh' },
    { id: 5, name: 'rubina kalita', joiningDate: '2019-05-09', phoneNumber: '8876654321', email: 'rubina@example.com',    address: 'Delhi' },
    { id: 6, name: 'jesmin saliha', joiningDate: '2022-01-05', phoneNumber: '8832145567', email: 'jesmin@example.com',    address: 'Jorhat' },
    { id: 7, name: 'hima kalita',   joiningDate: '2023-06-02', phoneNumber: '8876566743', email: 'hima@example.com',      address: 'Dibrugarh' },
    { id: 8, name: 'dip barman',    joiningDate: '2011-05-11', phoneNumber: '9989976578', email: 'dip@example.com',       address: 'Dhuburi' },
    { id: 9, name: 'malini',        joiningDate: '2015-01-09', phoneNumber: '7765478976', email: 'malini@example.com',    address: 'Nogaon' },
    { id: 10, name: 'gitashree',     joiningDate: '2019-07-01', phoneNumber: '9987645679', email: 'gitashree@example.com', address: 'Guwahati' },
    { id: 11, name: 'epshitak',      joiningDate: '2015-08-03', phoneNumber: '8890763456', email: 'epshitak@example.com',  address: 'Delhi' },
    { id: 12, name: 'marry deka',    joiningDate: '2022-03-06', phoneNumber: '7754678098', email: 'marry@example.com',     address: 'Jorhat' },
    // Add more employee data as needed
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Employees Details</h2>
      <hr />
      <table border="1" style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Joining Date</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <React.Fragment key={employee.id}>
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
              </tr>
              {index !== employeesData.length - 1 && <hr />} {/* Add line between sections */}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Define the AdminPage component
const AdminPage = () => {
  const [accessDenied, setAccessDenied] = useState(false);
  const [showEmployeesDetails, setShowEmployeesDetails] = useState(false);
  const navigate = useNavigate();

  const handleReimbursementFormClick = () => {
    // Add logic to check if the user has access to the Reimbursement Form
    // For now, always set accessDenied to true
    setAccessDenied(true);
    setShowEmployeesDetails(false); // Hide Employees Details on Reimbursement Form click
    // Add logic to show "Access Denied" alert
    alert('Access Denied: You do not have permission to access the Reimbursement Form.');
  };

  const handleEmployeesClick = () => {
    // Toggle visibility of Employees Details
    setShowEmployeesDetails(!showEmployeesDetails);
  };

  
  const handleBackToHelloAdmin = () => {
    // Navigate back to Hello Admin Page
    navigate('/');
  };
  

  return (
    <div>
      <div className="admin-welcome-container" style={{ backgroundColor: '#A8A8A8', color: 'black', padding: '10px' }}>
      <h2>Welcome to the Admin Panel!!!!</h2>
      </div>
     
      <div style={{  display: 'flex', justifyContent: 'space-between', margin: '80px 330px' }}>
        <button onClick={handleEmployeesClick}>Employees</button>
        <button onClick={handleReimbursementFormClick}>Reimbursement Form</button>
        <button onClick={handleBackToHelloAdmin}>Back</button>
      </div>
      {accessDenied}
      {showEmployeesDetails && <EmployeesDetails />}
      {/* Add content for the admin page here */}
    </div>
  );
};

function AdminReimbursementForm() {
  const [adminCredentials, setAdminCredentials] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAdminCredentials({
      ...adminCredentials,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic (replace this with actual authentication)
    const validCredentials = {
      email: 'admin@example.com',
      password: 'admin123',
    };

    if (
      adminCredentials.email === validCredentials.email &&
      adminCredentials.password === validCredentials.password
    ) {
      // Successfully logged in
      setLoggedIn(true);
    } else {
      setErrors({ login: 'Invalid email or password' });
    }
  };

  const handleBack = () => {
    // Navigate back to LoginPage
    navigate('/');
  };
  
  // Redirect to AdminPage if logged in
  if (isLoggedIn) {
    return <AdminPage />;
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-2">
          <div className="admin-welcome-container">
            <div className="admin-welcome-message">Hello Admin!!!</div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
              <div className="form-group bs">
                <form onSubmit={handleLogin}>
                  {/* Login Form */}
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={adminCredentials.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type={showPassword ? 'text' : 'password'} // Toggle between text and password
                      className="form-control"
                      name="password"
                      value={adminCredentials.password}
                      onChange={handleInputChange}
                    />

                   <label style={{ marginLeft: '10px' }}>
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      Show Password
                    </label>

                  </div>
                  {errors.login && <div className="error">{errors.login}</div>}
                  <button type="submit" className="btn btn-primary mt-3">
                    Login
                  </button>
                  <button type="button" className="btn btn-secondary mt-3" onClick={handleBack}>
                    Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReimbursementForm;