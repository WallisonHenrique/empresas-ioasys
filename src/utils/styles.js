import styled from "styled-components";

export const Spinner = styled.div`
	backdrop-filter: blur(0.5px);
  	background-color: rgba(255, 255, 255, 0.6);
  	left: 0;
  	position: fixed;
  	top: 0;
  	height: 100%;
  	width: 100%;
  	display: flex;
  	align-items: center;
  	justify-content: center;

  	&:after {
  		animation: rotation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  		content: '';
  		border: 13px solid #57bbbc;
  		border-top-color: transparent; 
  		border-radius: 50%;
  		height: 132px;
  		width: 132px;
  	}

  	@keyframes rotation {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
`;
