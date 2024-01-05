import React, { useState } from 'react';


function EmployeeReimbursementForm() {
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
                    <div className='form-group bs' >
                        <form onSubmit={handleSubmit}>
                            <div >

                                <label htmlFor="date" style={{ marginRight: '10px' }}>Date:</label>


                                <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleInputChange} />
                                {errors.date && <div className="error">{errors.date}</div>}
                            </div>


                            <div>
                                <label htmlFor="amount">Amount:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                />
                                {errors.amount && <div className="error">{errors.amount}</div>}
                            </div>

                            <div>
                                <label style={{ marginRight: '90px' }}>Payment Type: </label>
                                <input
                                    type="radio"

                                    id="cash"
                                    name="paymentType"
                                    value="Cash"
                                    checked={formData.paymentType === 'Cash'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="cash" style={{ marginRight: '50px', marginTop: '20px' }}>Cash</label>

                                <input
                                    type="radio"

                                    id="card"
                                    name="paymentType"
                                    value="Card"
                                    checked={formData.paymentType === 'Card'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="card" style={{ marginRight: '50px', marginTop: '20px' }}>Card</label>
                                {errors.paymentType && <div className="error">{errors.paymentType}</div>}
                            </div>

                            <div>
                                <label style={{ marginRight: '50px', marginTop: '20px' }}>Out of Pocket Expense:</label>
                                <input
                                    type="checkbox"

                                    id="materialTransportation"
                                    name="materialTransportation"
                                    checked={formData.materialTransportation}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="materialTransportation" >Material Transportation</label>

                                {formData.materialTransportation && (
                                    <div>
                                        <label htmlFor="transportationDetails" style={{ marginTop: '20px' }}>Transportation Details:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="transportationDetails"
                                            name="transportationDetails"
                                            value={formData.transportationDetails}
                                            onChange={handleInputChange}
                                        />
                                        {errors.transportationDetails && (
                                            <div className="error">{errors.transportationDetails}</div>
                                        )}
                                    </div>
                                )}


                                <div>
                                    <input
                                        type="checkbox"

                                        id="other"
                                        name="other"
                                        checked={formData.other}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="other" style={{ marginTop: '20px', marginRight: '-90px' }}>Other</label>

                                    {formData.other && (
                                        <div>
                                            <label htmlFor="otherReason" style={{ marginTop: '20px' }}>Reason:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="otherReason"
                                                name="otherReason"
                                                value={formData.otherReason}
                                                onChange={handleInputChange}
                                            />
                                            {errors.otherReason && <div className="error">{errors.otherReason}</div>}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="raisedBy" style={{ marginTop: '20px' }}>Raised By:</label>
                                <select
                                    id="raisedBy"
                                    className="form-control"
                                    name="raisedBy"
                                    value={formData.raisedBy}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select employee</option>
                                    <option value="employee1">Employee 1</option>
                                    <option value="employee2">Employee 2</option>
                                    {/* Add more employee options as needed */}
                                </select>
                                {errors.raisedBy && <div className="error">{errors.raisedBy}</div>}
                            </div>

                            <div>
                                <label htmlFor="remarks" style={{ marginTop: '20px' }}>Remarks:</label>
                                <textarea
                                    id="remarks"
                                    className="form-control"
                                    name="remarks"
                                    value={formData.remarks}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeReimbursementForm;
