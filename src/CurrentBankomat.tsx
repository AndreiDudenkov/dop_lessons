import React from 'react';
import {MoneyType} from "./App";
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
            <Banknote color={props.money.banknotes=== 'Dollars'? 'lawngreen':''}>
                <Name>{props.money.banknotes}</Name>
               <Nominal> {props.money.value}</Nominal>
            </Banknote>

            // <BanknoteBlue>
            //     <Name>{props.money.banknotes}</Name>
            //     <Nominal> {props.money.value}</Nominal>
            // </BanknoteBlue>

        // <div>
        //     {props.money.banknotes}
        //     {props.money.value}
        // </div>
    );
};

const Banknote = styled.div`
   height: 200px;
   width: 400px;
   background-color: ${props=>
       props.color==="lawngreen"?'lawngreen':'deepskyblue'
   };
   margin: 10px;
   align-content: center;
   `

const Name = styled.span`
  display: flex;
  justify-content: center;
`
const Nominal = styled.span`
  display: flex;
  justify-content: center;
  font-size: 90px;
`
//---------------------------------------------------------------------------------
// const BanknoteGreen = styled.div`
//   height: 200px;
//   width: 400px;
//   background-color: lawngreen;
//   margin: 10px;
//   align-content: center;
// `
// const BanknoteBlue = styled.div`
//   height: 200px;
//   width: 400px;
//   background-color: deepskyblue;
//   margin: 10px;
//   align-content: center;
// `
// const Name = styled.span`
//   display: flex;
//   justify-content: center;
// `
// const Nominal = styled.span`
//   display: flex;
//   justify-content: center;
//   font-size: 90px;
// `