import styled from "styled-components";

export const Company = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding-bottom: 15px;
  padding-top: 15px;
  margin-bottom: 30px;

  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #1a0e49;
  }

  h3 {
    font-size: 22px;
    font-weight: normal;
    color: #8d8c8c;
  }

  h4 {
    font-size: 16px;
    font-weight: normal;
    color: #8d8c8c;
  }

  img {
    max-width: 100%;
  }
`;

export const Resume = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #7dc075;
  color: #fff;
  height: 160px;
  width: 100%;
  font-size: 80px;
  font-weight: bold;

  @media (max-width: 576px) {
    margin-bottom: 16px;
  }
`;
