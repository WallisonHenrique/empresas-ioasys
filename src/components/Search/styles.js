import styled from "styled-components";
import iconClose from "../../img/ic-close.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Nav = styled.nav`
  align-items: flex-end;
  background-color: #ee4c77;
  display: flex;
  min-height: 140px;
  padding: 30px 30px 15px 30px;
  position: relative;

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 425px) {
    img {
      width: 210px;
    }
  }

  form {
    width: 100%;
  }
`;

export const Content = styled.main`
  padding: 30px;
  flex: 1 1 auto;
`;

export const NotFound = styled.p`
  color: #b5b4b4;
  font-size: 32px;
  line-height: 1.2;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const FieldSearch = styled.div`
  position: relative;

  input {
    background: inherit;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 50px;
    border: none;
    color: #fff;
    font-size: 30px;
    line-height: 1;
    padding: 10px 60px;
    width: 100%;
    border-bottom: 1px solid;
    border-bottom-color: #fff;

    ::-webkit-input-placeholder {
      color: #991237;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: #991237;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #991237;
    }

    :-ms-input-placeholder {
      color: #991237;
    }
  }

  button {
    background-color: inherit;
    background-image: url(${iconClose});
    background-size: cover;
    border: none;
    height: 50px;
    position: absolute;
    right: 0;
    top: 5px;
    width: 50px;
  }
`;
