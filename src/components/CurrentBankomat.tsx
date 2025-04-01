import styled from "styled-components";
import {MoneyType} from "../App";

type CurrentBankomatPropsType = {
  money: MoneyType
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {
  return (
    <div>
      <Banknote color={money.banknote === "USD" ? "aquamarine" : "lightskyblue"}>
        <Name>{money.banknote}</Name>
        <Nominal>{money.nominal}</Nominal>
      </Banknote>
    </div>
  );
};

type ColorPropsType = {
  color: string
}

const BanknoteGreen = styled.div<ColorPropsType>`
  background-color: ${(props) => props.color};
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div<ColorPropsType>`
  background-color: ${(props) => props.color};
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Banknote = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 100px;
  margin: 5px;
`


const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`
