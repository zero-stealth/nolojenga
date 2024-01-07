  "use client";

  import { useState } from "react";
  import NavBar from "@/app/components/NavBar";
  import AddAmenities from "@/app/components/Form/Add/AddAmenities";
  import AddRental from "@/app/components/Form/Add/AddRental";
  import AddPayable from "@/app/components/Form/Add/AddPayable";
  import AddRules from "@/app/components/Form/Add/AddRules";
  import styles from "@/app/style/add.module.css";

export default function AddProperty() {
  const [activeComponent, setActiveComponent] = useState("addRental");
  const handleStepClick = (step) => {
    setActiveComponent(step);
  };

  const handleNextClick = () => {
    switch (activeComponent) {
      case "addRental":
        setActiveComponent("addAmenities");
        break;
      case "addAmenities":
        setActiveComponent("addRules");
        break;
      case "addRules":
        setActiveComponent("AddPayable");
        break;
      case "AddPayable":
        break;
      default:
        break;
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "addRental":
        return <AddRental />;
      case "addAmenities":
        return <AddAmenities />;
      case "addRules":
        return <AddRules />;
      case "AddPayable":
        return <AddPayable />;
      default:
        return null;
    }
  };

  const renderProgressIndicators = () => {
    const steps = ["addRental", "addAmenities", "addRules", "AddPayable"];
    return steps.map((step, index) => (
      <div
        key={step}
        className={styles.progress}
        onClick={() => handleStepClick(step)}
      >
        {index > 0 && <span key={`divider-${index}`} className={styles.divider}></span>}
        <div
          key={`indicator-${index}`}
          className={`${styles.progressIndicator} ${
            activeComponent === step ? styles.active : ""
          }`}
        ></div>
      </div>
    ));
  };
  
  return (
    <div className={styles.addComponent}>
      <NavBar />
      <div className={styles.addComponentLayout}>
        <div className={styles.addComponentProgress}>
          {renderProgressIndicators()}
        </div>
        <div className={styles.addComponentContent}>
          {renderActiveComponent()}
        </div>
        <div className={styles.addComponentBtn}>
        <button
            className={styles.addComponentButton}
            onClick={handleNextClick}
          >
            { activeComponent === "AddPayable" ? "Submit" : "Next" }
          </button>
        </div>
       
      </div>
    </div>
  );
}
