import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>();

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
    <>
      <form>
        <div>
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
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="Enter Age"
            onChange={handleAgeChange}
          ></input>
        </div>
      </form>
    </>
  );
};

export default Calculator;
