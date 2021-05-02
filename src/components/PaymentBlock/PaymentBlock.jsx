import React from "react";
import PaymentItem from "./../PaymentItem";
import { ReactComponent as IconCredit } from "./../../assets/img/iconCredit.svg";
import $ from "styled-components";
const $PaymentBlock = $.div`
  background-color: white;
  padding: 20px;
`;
const PaymentBlock = () => {
  return (
    <$PaymentBlock className="payment-block">
      <PaymentItem
        icon={<IconCredit />}
        text={"Tarjeta de Crédito"}
        link={"Ver promociones bancarias"}
      />
      <PaymentItem
        icon={<IconCredit />}
        text={"Tarjeta de débito"}
        link={"Ver más"}
      />
      <PaymentItem 
        icon={<IconCredit />} 
        text={"Efectivo"} 
        link={"Ver más"} />
    </$PaymentBlock>
  );
};

export default PaymentBlock;
