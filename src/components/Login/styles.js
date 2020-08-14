import styled from "styled-components";
import imgVisibility from "../../img/visibility.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 610px) {
    height: 100%;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 340px;
  }

  @media (max-width: 610px) {
    padding: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  width: 250px;

  @media (min-width: 768px) {
    margin-top: 64px;
    margin-bottom: 26px;
  }
`;

export const Description = styled.p`
  color: #383743;
  font-size: 17px;
  line-height: 1.44;
  text-align: center;
`;

export const Form = styled.form`
  text-align: center;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${({ invalid }) => (invalid ? "#748383" : "#57bbbc")};
  border: none;
  border-radius: 4px;
  color: #fff;
  height: 52px;
  width: 320px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const getInputInvalid = invalid => {
  if (invalid) {
    return `
			:after {
			content: "!";
			background-color: #ff0f44;
			border-radius: 50%;
			color: #ffffff;
			height: 24px;
			position: absolute;
			right: 0;
			top: 0;
			width: 24px;
		}
		`;
  }
};

export const FieldInput = styled.div`
  margin-top: 35px;
  position: relative;

  ${({ invalid }) => getInputInvalid(invalid)};

  input {
    background: inherit;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: left center;
    border: none;
    color: #403e4d;
    font-size: 18px;
    line-height: 1;
    padding: 3px 30px 3px 40px;
    width: 100%;
    border-bottom: 1px solid;
    border-bottom-color: ${({ invalid }) => (invalid ? "#ff0f44" : "#383743")};
  }

  @media (max-width: 425px) {
    margin-top: 20px;
  }
`;

export const VisibilityPassword = styled.button`
  background-image: url(${imgVisibility});
  background-color: inherit;
  background-size: cover;
  border: none;
  height: 26px;
  position: absolute;
  right: 0;
  top: 0;
  width: 26px;
`;

export const Warning = styled.p`
  color: #ff0f44;
  font-size: 12px;
  height: 18px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 610px) {
    height: 34px;
  }
`;
