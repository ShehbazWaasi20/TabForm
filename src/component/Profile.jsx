import { react, useState } from "react";

const Profile = ({ formData, setFormData, error }) => {
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        {error.name && <span className="error-message">{error.name}</span>}
      </div>
      <br />
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
        {error.age && <span>{error.age}</span>}
      </div>
      <br />
      <div>
        <label>Gender : </label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {error.gender && <span className="error-message">{error.gender}</span>}
      </div>
    </div>
  );
};

export default Profile;
