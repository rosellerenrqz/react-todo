import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [inputVal, setInputVal] = useState("");

  const inputValHandler = (e) => {
    setInputVal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputVal.trim()) {
      props.onAddGoal(inputVal);
      setInputVal("");
      console.log(inputVal, "inptVal");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goul</label>
        <input type="text" value={inputVal} onChange={inputValHandler} />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
