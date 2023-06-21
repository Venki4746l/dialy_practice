import React from "react";
import { useState } from "react";
import "./SpendAnalysis.css";

const SpendAnalysis = () => {
  const [total, setTotal] = useState(0);
  const [deposits,setDeposits]=useState(0)
  const [withdrwals,setWithdrwals]=useState(0)

  const [value, setValue] = useState("");

  const onDepositHandler = () => {
    setTotal((prev) => prev + value);
    setDeposits((prev)=>prev+value)
    setValue("");
  };
  const onWithdrawalHandler = () => {
    setTotal((prev) => prev - value);
    setWithdrwals((prev)=>prev+value)
    setValue("");
  };

  return (
    <div className="spend_mainContainer">
      <div className="d-flex flex-column spend_addContainer">
        <h1>Add amount </h1>
        <input
          className="spend_input"
          value={value}
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="m-2 p-2">
          <button className="btn btn-primary" onClick={onDepositHandler}>
            deposit
          </button>
          <button className=" btn btn-danger m-3" onClick={onWithdrawalHandler}>
            withdrwal
          </button>
        </div>
      </div>
      <div className="spends_analsis_container">
        <div className="containers_spends">
          <h1 className="spends_heading">TOTAL</h1>
          <div className="spends_container border" ><h1 className="value_text text-primary">{total} rs</h1></div>
        </div>
        <div className="containers_spends">
          <h1 className="spends_heading">deposits</h1>
          <div className="spends_container border" ><h1 className="value_text text-success">{deposits} rs</h1></div>
        </div>
        <div className="containers_spends">
          <h1 className="spends_heading ">Withdrwal</h1>
          <div className="spends_container border" ><h1 className="value_text text-danger">{withdrwals} rs</h1></div>
        </div>
      </div>
    </div>
  );
};

export default SpendAnalysis;
