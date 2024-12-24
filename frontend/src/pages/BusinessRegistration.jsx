import React, { useState } from 'react';
import axios from 'axios';
import './BusinessRegistration.css'; 

const BusinessRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    email: '',
    phone: '',
    contactAddress: '',
    businessAddress: '',
    businessType: '',
    taxID: null,
    proofOfAddress: null,
    license: null,
    registrationNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataObject = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObject.append(key, value);
      });

      const response = await axios.post(
        'http://localhost:3000/api/v1/business/',
        formDataObject,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      alert('Business registered successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error registering business:', error.response?.data || error);
      alert('An error occurred while registering the business.');
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Business Registration</h1>
        <form className="business-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Owner Name</label>
              <input
                type="text"
                name="ownerName"
                placeholder="Enter owner name"
                value={formData.ownerName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Contact Address</label>
              <input
                type="text"
                name="contactAddress"
                placeholder="Enter contact address"
                value={formData.contactAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Business Address</label>
              <input
                type="text"
                name="businessAddress"
                placeholder="Enter business address"
                value={formData.businessAddress}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Select Business Type</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
            >
              <option value="">Select business type</option>
              <option value="Retail">Retail</option>
              <option value="Services">Services</option>
              <option value="Manufacturing">Manufacturing</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Upload Tax ID</label>
              <input
                type="file"
                name="taxID"
                className="file-input"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label>Upload Proof of Address</label>
              <input
                type="file"
                name="proofOfAddress"
                className="file-input"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Upload License</label>
              <input
                type="file"
                name="license"
                className="file-input"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label>Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Enter registration number"
                value={formData.registrationNumber}
                onChange={handleInputChange}
              />
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




// import React from 'react';
// import './BusinessRegistration.css'; 

// const BusinessRegistration = () => {
//   return (
//     <div className="form-page">
//       <div className="form-container">
//         <h1>Business Registration</h1>
//         <form className="business-form">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Company Name</label>
//               <input type="text" placeholder="Enter company name" />
//             </div>
//             <div className="form-group">
//               <label>Owner Name</label>
//               <input type="text" placeholder="Enter owner name" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Email Address</label>
//               <input type="email" placeholder="Enter email address" />
//             </div>
//             <div className="form-group">
//               <label>Phone Number</label>
//               <input type="tel" placeholder="Enter phone number" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Contact Address</label>
//               <input type="text" placeholder="Enter contact address" />
//             </div>
//             <div className="form-group">
//               <label>Business Address</label>
//               <input type="text" placeholder="Enter business address" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Select Business Type</label>
//             <select>
//               <option>Select business type</option>
//               <option>Retail</option>
//               <option>Services</option>
//               <option>Manufacturing</option>
//             </select>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Upload Tax ID</label>
//               <input type="file" className="file-input" />
//             </div>
//             <div className="form-group">
//               <label>Upload Proof of Address</label>
//               <input type="file" className="file-input" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Upload License</label>
//               <input type="file" className="file-input" />
//             </div>
//             <div className="form-group">
//               <label>Registration Number</label>
//               <input type="text" placeholder="Enter registration number" />
//             </div>
//           </div>
//           <div className="form-buttons">
//             <button type="reset" className="clear-button">Clear</button>
//             <button type="submit" className="submit-button">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BusinessRegistration;
