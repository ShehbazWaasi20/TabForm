import { react } from "react";

const Interest = ({ formData, setFormData }) => {
  const handleChange = (e, name) => {
    console.log(e.target.value);
    console.log(name);
    setFormData((prev) => ({
      ...prev,
      interest: e.target.checked
        ? [...prev.interest, name]
        : prev.interest.filter((a) => a !== name),
    }));
  };
  console.log(formData.interest);
  return (
    <div>
      <input
        type="checkbox"
        checked={formData.interest.includes("coding")}
        onChange={(e) => handleChange(e, "coding")}
      />
      Coding
      <input
        type="checkbox"
        checked={formData.interest.includes("movies")}
        onChange={(e) => handleChange(e, "movies")}
      />{" "}
      Movies
      <input
        type="checkbox"
        checked={formData.interest.includes("cricket")}
        onChange={(e) => handleChange(e, "cricket")}
      />{" "}
      cricket
      <input
        type="checkbox"
        checked={formData.interest.includes("video-games")}
        onChange={(e) => handleChange(e, "video-games")}
      />{" "}
      video games
    </div>
  );
};

export default Interest;
