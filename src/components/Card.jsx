import React from "react";
import styled from "styled-components";
import imgMobile from "./../assets/images/image-product-mobile.jpg";
import imgDesktop from "./../assets/images/image-product-desktop.jpg";
import iconCart from "./../assets/images/icon-cart.svg";

export default function Card() {
  return (
    <Container>
      <picture>
        <source media="(min-width:1024px )" srcSet={imgDesktop} />
        <source media="(min-width:375px )" srcSet={imgMobile} />
        <img src={screen.width < 768 ? imgMobile : imgDesktop} alt="product" />
      </picture>
      <Content>
        <PreTitle>Permufe</PreTitle>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Paragraph>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Paragraph>
        <PriceContainer>
          <PriceNow>$149.99</PriceNow>
          <PriceBefore>$169.99</PriceBefore>
        </PriceContainer>
        <Btn>
          <img src={iconCart} alt="icon cart" />
          <BtnText>Add to Cart</BtnText>
        </Btn>
      </Content>
    </Container>
  );
}

// Primary colors
let darkCyan = "hsl(158, 36%, 37%)";
let darkCyanHover =
  "hsl(157.64705882352942, 36.170212765957444%, 27.647058823529413%)";

//  Neutral Colors
let veryDarkBlue = "hsl(212, 21%, 14%)";
let darkGrayishBlue = "hsl(228, 12%, 48%)";
let white = "hsl(0, 0%, 100%)";

// Fonts
let fontFamilyFraunces = "Fraunces, serif";

const Container = styled.main`
  background-color: ${white};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5rem;
  overflow-x: hidden;
  margin-bottom: 2rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Content = styled.div`
  padding: 1rem;
  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 2rem;
    padding-right: 4rem;
  }
`;

const PreTitle = styled.p`
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: ${darkGrayishBlue};
  font-size: 0.7rem;
`;

const Title = styled.h1`
  color: ${veryDarkBlue};
  font-size: 1.8rem;
  font-family: ${fontFamilyFraunces};
  @media (min-width: 1024px) {
    font-size: 2rem;
    width: 60%;
  }
`;

const Paragraph = styled.p`
  color: ${darkGrayishBlue};
  @media (min-width: 1024px) {
    line-height: 2;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 1024px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const PriceNow = styled.p`
  font-size: 2rem;
  font-family: ${fontFamilyFraunces};
  color: ${darkCyan};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PriceBefore = styled.p`
  color: ${darkGrayishBlue};
  text-decoration: line-through;
`;

const Btn = styled.button`
  border: none;
  background-color: ${darkCyan};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  border-radius: 0.3rem;
  padding: 1rem;
  & img {
    width: 1.2rem;
  }
  &:hover {
    background-color: ${darkCyanHover};
    cursor: pointer;
  }
`;

const BtnText = styled.span`
  color: ${white};
  font-weight: 600;
`;
