import React from "react";
import Header from "./../components/Header";
import BannerSlider from "./../components/BannerSlider";
import PaymentBlock from "./../components/PaymentBlock";
import Container from "./../components/Container";
import ProductRow from "./../components/ProductRow";
const Home = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <Container>
        <PaymentBlock />
        <ProductRow title={'Basado en tu última visita'}/>
      </Container>
    </>
  );
};

export default Home;
