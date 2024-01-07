import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from './users.json';

function EmployeeReimbursementForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showLoginSection, setShowLoginSection] = useState(true); // Set to true initially
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form (same validation logic as before)

    if (Object.keys(errors).length === 0) {
      // Form is valid, check the credentials
      const user = usersData.users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user && user.role === 'employee') {
        // Successful login, navigate to ReimbursementForm
        setShowLoginSection(false);
        navigate('/reimbursement-form'); // Navigating to the reimbursement-form page
      } else {
        // Invalid credentials, show an error
        setErrors({ login: 'Invalid email or password' });
      }
    } else {
      // Form is invalid, update the errors state
      setErrors(errors);
    }
  };

  const handleBack = () => {
    // Redirect back to the login page
    navigate('/');
  };

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-2">
          <div className="bs" style={{ backgroundColor: '#A8A8A8', padding: '10px', borderRadius: '8px' }}>
            <h2 style={{ color: 'black' }}>Welcome Employee!!!!!</h2>
            {showLoginSection ? (
              <div>
                {/* Include your login section here */}
                <label>Email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />

                <button className="btn btn-secondary mt-3" onClick={handleBack}>
                  Back
                </button>

                {errors.login && <div className="error">{errors.login}</div>}
                <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            ) : (
              <div>
                {/* Rendered when logged in */}
                {/* Back button included */}
                <button className="btn btn-secondary mr-2" onClick={handleBack}>
                  Back
                </button>
                <button className="btn btn-success mr-2">Reimbursement Form</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeReimbursementForm;