import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the LoginPage component
function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Perform your authentication logic here

      // For simplicity, storing a dummy user in localStorage
      const dummyUser = { role };
      localStorage.setItem('currentUser', JSON.stringify(dummyUser));

      if (role === 'employee') {
        navigate('/employee-reimbursement-form');
      } else if (role === 'admin') {
        navigate('/admin-reimbursement-form');
      } else {
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
      {/* Container with "Welcome to BinBag" */}
      <div style={{ backgroundColor: '#A8A8A8', padding: '10px', borderRadius: '5px', textAlign: 'center', marginTop: '50px' }}>
        <h2>Welcome to BinBag</h2>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <div className="bs" style={{ backgroundColor: '#A8A8A8', padding: '10px', borderRadius: '5px' }}>
            {/* Small container with "Select Your Role" */}
            <div style={{ backgroundColor: '#A8A8A8', padding: '10px', borderRadius: '5px', textAlign: 'center', marginBottom: '30px' }}>
              <h3>Select Your Role</h3>
            </div>
            <div style={{ marginBottom: '30px', fontSize: '1.8em', display: 'flex', justifyContent: 'space-between' }}>  
              
              <label>
                <input
                  type="radio"
                  value="employee"
                  checked={role === 'employee'}
                  onChange={() => setRole('employee')}
                />
                Employee
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                />
                Admin
              </label>
            </div>

            <button className="btn btn-primary mt-3" onClick={handleLogin}>
              Proceed
            </button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error occurred. Please try again.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the LoginPage component
export default LoginPage;