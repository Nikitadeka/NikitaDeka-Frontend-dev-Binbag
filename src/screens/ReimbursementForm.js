import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReimbursementForm.css';

const employees = [
  { id: 1, name: 'ruchi deka' },
  { id: 2, name: 'anku barman' },
  { id: 3, name: 'manvi singh' },
  { id: 4, name: 'rihana sharma' },
  { id: 5, name: 'rubina kalita' },
  { id: 6, name: 'jesmin saliha' },
  { id: 7, name: 'hima kalita' },
  { id: 8, name: 'dip barman' },
  { id: 9, name: 'malini' },
  { id: 10, name: 'gitashree' },
  { id: 11, name: 'epshitak' },
  { id: 12, name: 'marry deka' },
  // Add more employees as needed
];

const ReimbursementForm = () => {
  const [formData, setFormData] = useState({
    date: '2024-01-01',
    amount: '10000',
    paymentType: 'card',
    materialTransportation: false,
    transportationDetails: 'true',
    foodExpense: 'true',
    accomodationExpense: false,
    transportationExpense: false,
    materialExpense: false,
    materialDetails: '',
    otherExpense: false,
    otherReason: '',
    raisedBy: 'anku barman',
    remarks: 'Example remarks',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Ensuring amount only contains numeric values
    if (name === 'amount' && !/^\d*$/.test(value)) {
      return;
    }

    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleReset = () => {
    setFormData({
      date: '',
      amount: '',
      paymentType: '',
      materialTransportation: false,
      transportationDetails: '',
      foodExpense: false,
      accomodationExpense: false,
      transportationExpense: false,
      materialExpense: false,
      materialDetails: '',
      otherExpense: false,
      otherReason: '',
      raisedBy: '',
      remarks: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.amount || !formData.paymentType || !formData.raisedBy) {
      window.alert('Please fill in all required fields before submitting.');
      return;
    }
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    window.alert('Reimbursement form successfully submitted!');
  };

  const handleBack = () => {
    // Navigate back to EmployeeReimbursementForm
    navigate('/employee-reimbursement-form');
  };

  return (
    <div>
      <h2>Reimbursement Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </div>

        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            pattern="\d*"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Payment Type:</label>
          <select name="paymentType" value={formData.paymentType} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Cash">Cash</option>
            <option value="Card">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Netbanking">Netbanking</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Out of Pocket Expenses:</label>
          <label>
            <input
              type="checkbox"
              name="foodExpense"
              checked={formData.foodExpense}
              onChange={handleInputChange}
            />
            Food
          </label>
          <label>
            <input
              type="checkbox"
              name="accomodationExpense"
              checked={formData.accomodationExpense}
              onChange={handleInputChange}
            />
            Accommodation
          </label>
          <label>
            <input
              type="checkbox"
              name="transportationExpense"
              checked={formData.transportationExpense}
              onChange={handleInputChange}
            />
            Transportation
          </label>

          
          <label>
            <input
              type="checkbox"
              name="materialTransportation"
              checked={formData.materialTransportation}
              onChange={handleInputChange}
            />
            Material Transportation
          </label>

          {formData.materialTransportation && (
            <div>
              <label>Material Transportation Details:</label>
              <input
                type="text"
                name="materialTransportionDetails"
                value={formData.materialDetails}
                onChange={handleInputChange}
              />
            </div>
          )}

          <label>
            <input
              type="checkbox"
              name="otherExpense"
              checked={formData.otherExpense}
              onChange={handleInputChange}
            />
            Other
          </label>

          {formData.otherExpense && (
            <div>
              <label>Reason:</label>
              <input
                type="text"
                name="otherReason"
                value={formData.otherReason}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>

        <div>
          <label>Raised By:</label>
          <select name="raisedBy" value={formData.raisedBy} onChange={handleInputChange}>
            <option value="">Select employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Remarks:</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleInputChange} />
        </div>

        <div>
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReimbursementForm; 