import React, { useState } from "react";

import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
  // State for storing name
  const [name, setName] = useState("");
  // State for storing age
  const [age, setAge] = useState<number | string>("");
  // State for storing calculated age in days, this is displayed to user
  const [ageInDays, setAgeInDays] = useState<number | null>(null);

  // Checks if string is a valid number
  const isNumber = (num: string): boolean => /^\d+$/.test(num);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevents page from refreshing when the submit button is clicked
    event.preventDefault();

    // If age is a valid number, calculate age in days and set the state
    if (typeof age === "number") {
      setAgeInDays(Number(age) * 365);
    } else {
      alert("Please enter an age!");
    }
  };

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newAge = event.target.value;

    // If input is cleared, set age state to empty string
    if (newAge === "") {
      setAge("");
    } else if (isNumber(newAge)) {
      // If the input is a valid number, update age state
      setAge(Number(newAge));
    }
  };

  return (
    <div className={styles.calculator}>
      <form onSubmit={handleSubmit} className={styles.calculatorForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setName(event.target.value)
            }
          ></input>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="Enter Age"
            onChange={handleAgeChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display the result if ageInDays is not null */}
      {ageInDays && (
        <h2>
          {name ? name : "This person"} is {ageInDays} days old!
        </h2>
      )}
    </div>
  );
};

export default Calculator;
