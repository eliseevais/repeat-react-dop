import React from 'react';
import {City} from "./City";
import styled from "styled-components";
import {BanknotesType, MoneyType} from "../App";

type CountryPropsType = {
  data: MoneyType[]
  setFilterValue: (filter: BanknotesType) => void
  addMoney: (banknote: BanknotesType) => void
  removeMoney: (banknote: BanknotesType) => void
}

export const Country = ({data, setFilterValue, addMoney, removeMoney}: CountryPropsType) => {
  const setAll = () => {
    setFilterValue('All')
  }

  const setUSD = () => {
    setFilterValue('USD')
  }

  const setRUB = () => {
    setFilterValue('RUB')
  }

  const addMoneyHandler = (banknote: BanknotesType) => {
    addMoney(banknote)
  }

  const removeMoneyHandler = (banknote: BanknotesType) => {
    removeMoney(banknote)
  }

  return (
    <Terminal>
      <div>
        <button onClick={setAll}>All</button>
        <button onClick={setUSD}>Dollars</button>
        <button onClick={setRUB}>Rubles</button>
      </div>
      <div>
        <button onClick={() =>addMoneyHandler("USD")}>Положить 100$</button>
        <button onClick={() => addMoneyHandler("RUB")}>Положить 100р.</button>
        <button onClick={() => removeMoneyHandler("USD")}>Снять 100$</button>
        <button onClick={() => removeMoneyHandler("RUB")}>Снять 100р.</button>
      </div>
      <City data={data}/>
    </Terminal>
  );
};

const Terminal = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-size: 30px;
  background-color: #282c34;
`
