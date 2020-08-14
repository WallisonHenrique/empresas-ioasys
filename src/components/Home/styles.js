import styled from "styled-components";
import imgSearch from "../../img/ic-search-copy.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Nav = styled.nav`
  align-items: center;
  background-color: #ee4c77;
  display: flex;
  height: 140px;
  padding: 30px;
  position: relative;

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 425px) {
    img {
      width: 210px;
    }
  }

  button {
    background-color: inherit;
    background-image: url(${imgSearch});
    background-size: cover;
    border: none;
    bottom: 0;
    height: 60px;
    margin: auto;
    position: absolute;
    right: 20px;
    top: 0;
    width: 60px;

    @media (min-width: 768px) {
      right: 40px;
    }
  }
`;

export const Content = styled.main`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  padding: 30px;

  p {
    color: #383743;
    font-size: 32px;
  }
`;
