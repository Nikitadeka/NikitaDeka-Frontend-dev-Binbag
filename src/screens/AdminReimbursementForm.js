import React, { useState } from 'react';
import './ReimbursementForm.css';

function AdminReimbursementForm() {
    const [formData, setFormData] = useState({
        date: '',
        amount: '',
        paymentType: '',
        materialTransportation: false,
        transportationDetails: '',
        other: false,
        otherReason: '',
        raisedBy: '',
        remarks: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: fieldValue
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const newErrors = {};
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!formData.date || !dateRegex.test(formData.date)) {
            newErrors.date = 'Enter a valid date in the format YYYY-MM-DD';
        }
        if (!formData.date) newErrors.date = 'Date is required';
        const amountRegex = /^\d+(\.\d{1,2})?$/;  // Allows positive integers or decimals with up to 2 decimal places
        if (!formData.amount || !amountRegex.test(formData.amount)) {
            newErrors.amount = 'Enter a valid numeric amount';
        }
        if (!formData.amount) newErrors.amount = 'Amount is required';
        if (!formData.paymentType) newErrors.paymentType = 'Payment type is required';
        if (formData.materialTransportation && !formData.transportationDetails) {
            newErrors.transportationDetails = 'Transportation details are required';
        }
        if (formData.other && !formData.otherReason) {
            newErrors.otherReason = 'Other reason is required';
        }
        if (!formData.raisedBy) newErrors.raisedBy = 'Raised by is required';

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, submit the data or perform further actions
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');

            setFormData({
                date: '',
                amount: '',
                paymentType: '',
                materialTransportation: false,
                transportationDetails: '',
                other: false,
                otherReason: '',
                raisedBy: '',
                remarks: ''
            });

            setErrors({});
        } else {
            // Form is invalid, update the errors state
            setErrors(newErrors);
        }
    };

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-2">
                <div className="admin-welcome-container">
                <div className="admin-welcome-message">Hello Admin!!!</div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <div className='form-group bs' >
                        <form onSubmit={handleSubmit}>
                            {/* Rest of the form code */}

                            
                            <div>
                                <label htmlFor="name_of_the_employees_which_are_raised" style={{ marginTop: '20px' }}>name_of_the_employees_which_are_raised:</label>
                                <select
                                    id="employess name"
                                    className="form-control"
                                    name="raisedBy"
                                    value={formData.raisedBy}
                                    onChange={handleInputChange}
                                >
                                    <option value="">name of the employees which are raised</option>
                                    <option value="employee1">Employee 1</option>
                                    <option value="employee2">Employee 2</option>
                                    {/* Add more employee options as needed */}
                                </select>
                                {errors.raisedBy && <div className="error">{errors.raisedBy}</div>}
                            </div>



                            <div>
                                <label htmlFor="admin_name" style={{ marginTop: '10px' }}>Admin_name:</label>
                                <textarea
                                    id="admin_name"
                                    className="form-control"
                                    name="admin_name"
                                    value={formData.admin_name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            
                            <button type="see-more" className="btn btn-primary mt-3">see-more</button>
                        </form>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default AdminReimbursementForm;
