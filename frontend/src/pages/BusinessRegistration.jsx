import React from 'react';
import './BusinessRegistration.css'; 

const BusinessRegistration = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Business Registration</h1>
        <form className="business-form">
          <div className="form-row">
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Enter company name" />
            </div>
            <div className="form-group">
              <label>Owner Name</label>
              <input type="text" placeholder="Enter owner name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Contact Address</label>
              <input type="text" placeholder="Enter contact address" />
            </div>
            <div className="form-group">
              <label>Business Address</label>
              <input type="text" placeholder="Enter business address" />
            </div>
          </div>
          <div className="form-group">
            <label>Select Business Type</label>
            <select>
              <option>Select business type</option>
              <option>Retail</option>
              <option>Services</option>
              <option>Manufacturing</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Upload Tax ID</label>
              <input type="file" className="file-input" />
            </div>
            <div className="form-group">
              <label>Upload Proof of Address</label>
              <input type="file" className="file-input" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Upload License</label>
              <input type="file" className="file-input" />
            </div>
            <div className="form-group">
              <label>Registration Number</label>
              <input type="text" placeholder="Enter registration number" />
            </div>
          </div>
          <div className="form-buttons">
            <button type="reset" className="clear-button">Clear</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessRegistration;
