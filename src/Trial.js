import { useState } from "react";

export const Trial = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(true);

  const handleHideShowClick = () => {
    setDetailsVisible(!detailsVisible);
  };

  // TODO: make a unit test for this
  const showEnrollmentBadge = (first_enrollment_at) => {
    if (!first_enrollment_at) return false;
    console.log(`check date for ${first_enrollment_at}`);
    const today = new Date().toISOString().substring(0, 10);
    console.log(today);
    if (first_enrollment_at <= today) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div key={props.id} className="trialClass">
      {props.name}{" "}
      {showEnrollmentBadge(props.first_enrollment_at) ? "(Enrolling)" : ""}
      {props.description && detailsVisible && (
        <div>Description: {props.description}</div>
      )}
      {props.first_enrollment_at && detailsVisible && (
        <div>First enrollment: {props.first_enrollment_at}</div>
      )}
      <div className="toggleClass">
        <span onClick={() => handleHideShowClick()}>
          {detailsVisible ? "Hide details" : "Show details"}
        </span>
      </div>
    </div>
  );
};
