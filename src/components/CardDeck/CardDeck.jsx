import React from "react";
import Card from "./../Card";
import { ReactComponent as Credit } from "./../../assets/img/icons/footerCard.svg";
import FlexWrapper from "./../FlexWrapper";
const CardDeck = () => {
  return (
    <FlexWrapper>
      <Card
        icon={<Credit />}
        title={"Pagá con tarjeta o en efectivo"}
        text={
          "Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!"
        }
        link={"Cómo pagar con Mercado Pago"}
      />
      <Card
        icon={<Credit />}
        title={"Pagá con tarjeta o en efectivo"}
        text={
          "Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!"
        }
        link={"Cómo pagar con Mercado Pago"}
      />
      <Card
        icon={<Credit />}
        title={"Pagá con tarjeta o en efectivo"}
        text={
          "Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!"
        }
        link={"Cómo pagar con Mercado Pago"}
      />
    </FlexWrapper>
  );
};

export default CardDeck;
