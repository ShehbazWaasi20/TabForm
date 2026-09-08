import { react } from "react";

const Settings = ({ formData, setFormData }) => {
  const handleChange = (e, mode) => {
    setFormData((prev) => ({
      ...prev,
      theme: mode,
    }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          checked={formData.theme === "dark"}
          onChange={(e) => handleChange(e, "dark")}
        />
        dark
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          checked={formData.theme === "light"}
          onChange={(e) => handleChange(e, "light")}
        />
        light
      </label>
    </div>
  );
};

export default Settings;
