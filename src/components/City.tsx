import React from 'react';
import styled from "styled-components";
import {MoneyType} from "../App";
import {CurrentBankomat} from "./CurrentBankomat";

type CityPropsType = {
  data: MoneyType[]
}

export const City = ({data}: CityPropsType) => {

  const mappedMoney = data.map((el: MoneyType) => (
    <CurrentBankomat key={el.id} money={el} />
  ))

  return (
    <Wrapper>
      {mappedMoney}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
