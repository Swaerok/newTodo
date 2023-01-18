import styled from 'styled-components';

export const DarkSide = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const EditingWindow = styled.div`
  display: flex;
  border-radius: 7px;
  width: 50%;
  background-color: white;
  flex-direction: column;
  h2 {
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
    font-size: 30px;
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }
  input {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    border: 1px solid rgba(34, 36, 38, 0.15);
    margin: 20px;
    font-size: 20px;
    padding: 5px;
    border-radius: 7px;
  }
  div {
    display: flex;
    justify-content: end;
    padding: 20px;
  }
`;
export const EditingButton = styled.button`
  cursor: pointer;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  border: none;
  padding: 11px 21px;
  margin: 0 7px;
  font-weight: 700;
  border-radius: 3px;
  font-size: 20px;
  background-color: ${(props) => (props.color ? props.color : '#e0e1e2')};
`;
