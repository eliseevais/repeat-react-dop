import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Country} from "./components/Country";

export type BanknotesType = 'USD' | 'RUB' | 'All'
export type MoneyType = {
  banknote: BanknotesType
  nominal: number
  id: string
}

let defaultMoney: MoneyType[] = [
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'RUB', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'RUB', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {
  if (filter === "All") {
    return money
  }
  return money.filter(element => element.banknote === filter)
}

function App() {
  const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
  const [filterValue, setFilterValue] = useState<BanknotesType>('All')
  console.log("filterValue", filterValue)

  const filteredMoney = moneyFilter(money, filterValue)
  console.log("filteredMoney", filteredMoney)

  const addMoney = (banknote: BanknotesType) => {
    const newBanknote = {banknote: banknote, nominal: 100, id: v1()}
    setMoney([...money, newBanknote])
  }

  const removeMoney = (banknote: BanknotesType) => {
    const indexOfMoney = money.findIndex(el => el.banknote === banknote)
    if (indexOfMoney !== -1) {
      setMoney(money.filter((el, i) => i !== indexOfMoney))
    }
  }

  return (
    <div className="App">
      <Country
        data={filteredMoney}
        setFilterValue={setFilterValue}
        addMoney={addMoney}
        removeMoney={removeMoney}
      />
    </div>
  );
}

export default App;
