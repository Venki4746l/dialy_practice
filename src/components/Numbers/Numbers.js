import React, { useEffect, useState } from "react";
import "./Numbers.css";

const Numbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [numbersGenerated,setNumbersGenerated]=useState(0)

  useEffect(() => {
    const initial = [];
    for (let i = 1; i < 51; i++) {
      initial.push({ id: i, number: i, show: false });
    }
    setNumbers(initial);
  }, []);

  //generate to number
  const handlerToGenerateNumbers = () => {
    // const reset = numbers.map((num) =>
    //   num.show ? { ...num, show: false } : num
    // );
    // setNumbers(reset);
    // console.log(reset);
    console.log("numbers generate");
    const countGenerateNumbers=Math.floor(Math.random()*50+1)
    setNumbersGenerated(countGenerateNumbers)
    const checkingNumbers = [];
    for (let i = 1; i <= countGenerateNumbers; i++) {
      let value;
      do {
        value = Math.floor(Math.random() * 50 + 1);
      } while (checkingNumbers.includes(value));

      checkingNumbers.push(value);
    }
    console.log("genrated numbers",checkingNumbers)
    const updatedNumbers = numbers.map((num) =>
      checkingNumbers.includes(num.number)
        ? { ...num, show: true }
        : { ...num, show: false }
    );
    setNumbers(updatedNumbers);
  };
  return (
    <div className="numbers_mainBackground">
      <h1>numbers display</h1>

      <div className="bg-info numbersContainer">
        {numbers.map((each) => (
          <p className="numberDisplay" key={each.id}>
            {each.show ? each.number : ""}
          </p>
        ))}
      </div>
      <h1>total numbers generated {numbersGenerated}</h1>
      <button
        className="btn btn-primary m-3"
        onClick={handlerToGenerateNumbers}
      >
        generate
      </button>
    </div>
  );
};

export default Numbers;
