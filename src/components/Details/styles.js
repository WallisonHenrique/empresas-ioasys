import styled from "styled-components";
import iconComeback from "../../img/back.svg";

export const Nav = styled.nav`
  align-items: flex-end;
  background-color: #ee4c77;
  display: flex;
  height: 140px;
  padding: 30px;
  position: relative;

  h2 {
    color: #fff;
    font-size: 34px;
    margin-bottom: 0px;
    margin-left: 80px;
  }

  @media (max-width: 610px) {
    h2 {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 30px;
    }
  }
`;

export const Content = styled.main`
  color: #8d8c8c;
  padding: 30px;
  font-size: 30px;

  img {
    height: 300px;
    margin-bottom: 50px;
    width: 100%;
  }

  @media (max-width: 610px) {
    font-size: 18px;
    padding: 20px 30px;

    img {
      height: auto;
    }
  }
`;

export const Comeback = styled.span`
  background-image: url(${iconComeback});
  background-size: cover;
  display: inline-block;
  height: 34px;
  width: 34px;
`;

export const Company = styled.div`
  background-color: #fff;
  padding: 60px;

  @media (max-width: 610px) {
    padding: 20px 0;
  }
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #7dc075;
  color: #fff;
  height: 300px;
  width: 100%;
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 50px;

  @media (max-width: 610px) {
    height: 150px;
    margin-bottom: 20px;
  }
`;
