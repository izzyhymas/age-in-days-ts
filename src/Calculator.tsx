import React, { useState } from "react";

import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [ageInDays, setAgeInDays] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof age === "number") {
      setAgeInDays(Number(age) * 365);
    } else {
      alert("Please enter an age!");
    }
  };

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAge(event.target.valueAsNumber);
    // const newAge = event.target.value;
    // if (newAge === "") {
    //   setAge("");
    // } else {
    //   setAge(Number(newAge));
    // }
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
      {ageInDays && (
        <h2>
          {name ? name : "This person"} is {ageInDays} days old!
        </h2>
      )}
    </div>
  );
};

export default Calculator;
