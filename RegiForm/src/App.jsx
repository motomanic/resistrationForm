import React, { useState } from "react";
import "./App.css"; // Add some CSS for styling if needed

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.address.trim()) errors.address = "Address is required.";
    if (!formData.mobile.match(/^\d{10}$/)) errors.mobile = "Mobile must be 10 digits.";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errors.email = "Invalid email format.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.dob) errors.dob = "Date of birth is required.";
    if (!formData.course) errors.course = "Course selection is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Data Stored Successfully:\n${JSON.stringify(formData, null, 2)}`);
      setFormData({
        name: "",
        address: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        course: "",
      });
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <div className="App">
      <h2>Higher Secondary Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>

        <div>
          <label>Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </div>

        <div>
          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default App;
