import React from "react";
import PaymentItem from "./../PaymentItem";
const PaymentBlock = () => {
  return (
    <div>
      <PaymentItem
        text={"Tarjeta de Crédito"}
        link={"Ver promociones bancarias"}
      />
      <PaymentItem
        text={"Tarjeta de débito"}
        link={"Ver más"}
      />
      <PaymentItem
        text={"Efectivo"}
        link={"Ver más"}
      />
    </div>
  );
};

export default PaymentBlock;
