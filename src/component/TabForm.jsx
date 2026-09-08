import { react, useState, useCallback } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    interest: ["coding", "cricket"],
    theme: "dark",
  });
  const [error, setError] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: function () {
        const err = {};
        if (formData.name.length < 2) {
          err.name = "Enter proper name";
        }
        if (formData.age < 18) {
          err.age = "age should be above 18";
        }
        if (!formData.gender) {
          err.gender = "please select your gender";
        }

        setError(err);

        return err.name || err.age || err.gender ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const handleTabChange = (i) => {
    console.log(i);
    setActiveTab(i);
  };

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleNext = () => {
    console.log(tabs?.[activeTab].validate(), "ac====");
    if (tabs?.[activeTab].validate() === true) {
      console.log("ssss");
      setActiveTab((prev) => prev + 1);
    }
  };

  const ActiveTabComponent = tabs?.[activeTab]?.component;

  return (
    <div>
      <div className="Tab-Header">
        {tabs.map((tab, i) => (
          <div
            key={i}
            onClick={() => handleTabChange(i)}
            className="single-tab"
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-container">
        <ActiveTabComponent
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
      </div>
      {activeTab > 0 && <button onClick={handlePrev}>prev</button>}
      {activeTab < tabs.length - 1 && (
        <button onClick={handleNext}>Next</button>
      )}
      {activeTab === tabs.length - 1 && <button type="submit">Submit</button>}
    </div>
  );
};

export default TabForm;
