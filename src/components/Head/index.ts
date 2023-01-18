import styled, { keyframes } from 'styled-components';

export const HeaderBar = styled.div`
  background-color: #2185d0;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 20px;
  width: 100%;
  h1 {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  90% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(760deg);
  }
`;

export const HeaderIcon = styled.div`
  cursor: pointer;
  font-size: 40px;
  @media (max-width: 900px) {
    animation: ${rotate} 2s linear infinite;
  }
`;
