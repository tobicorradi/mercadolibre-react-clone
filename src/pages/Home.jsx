import React from "react";
import Header from "./../components/Header";
import BannerSlider from "./../components/BannerSlider";
import PaymentBlock from "./../components/PaymentBlock";
import Container from "./../components/Container";
import ProductRow from "./../components/ProductRow";
import Discover from "./../components/Discover";
import Footer from "./../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <Container>
        <PaymentBlock />
        <ProductRow title={"Basado en tu última visita"} />
        <ProductRow title={"Ofertas"} />
        <Discover />
        <ProductRow title={"Inspirado en tus favoritos"} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
