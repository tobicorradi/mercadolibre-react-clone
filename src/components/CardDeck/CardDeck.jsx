import React from "react";
import Card from "./../Card";
import { ReactComponent as Credit } from "./../../assets/img/icons/footerCard.svg";
import { ReactComponent as Box } from "./../../assets/img/icons/footerBox.svg";
import { ReactComponent as Security } from "./../../assets/img/icons/footerSecurity.svg";
import FlexWrapper from "./../FlexWrapper";
const CardDeck = () => {
  return (
    <FlexWrapper flexWrap={'wrap'} justify={'space-between'}>
      <Card
        icon={<Credit />}
        title={"Pagá con tarjeta o en efectivo"}
        text={
          "Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!"
        }
        link={"Cómo pagar con Mercado Pago"}
      />
      <Card
        icon={<Box />}
        title={"Envío gratis desde $ 3.500"}
        text={
          "Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos."
        }
        link={"Conocé más sobre este beneficio"}
      />
      <Card
        icon={<Security />}
        title={"Seguridad, de principio a fin"}
        text={
          "¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido."
        }
        link={"Cómo te protegemos"}
      />
    </FlexWrapper>
  );
};

export default CardDeck;
