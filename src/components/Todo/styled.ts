import styled, { keyframes } from 'styled-components';

export const TodoItem = styled.div<{ checked: Boolean | undefined }>`
  position: relative;
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  border-style: solid;
  border-color: rgba(34, 36, 38, 0.15);
  border-width: 0 0 2px 0;
  box-sizing: border-box;
  padding-left: 40px;
  p {
    margin: 0;
    padding: 3px;
    flex: 1;
    font-size: 22px;
    color: ${(props) => (props.checked ? 'rgba(34, 36, 38, 0.45)' : '')};
  }
  div {
    display: flex;
    flex: 0;
    font-size: 20px;
  }
  input {
    padding: 3px 5px;
    font-size: 20px;
    flex: 1;
    border-width: 0 0 2px 0;
  }
`;

export const CheckBox = styled.div<{ checked: Boolean | undefined }>`
  position: absolute;
  left: 8px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: ${(props) => (props.checked ? '#0b76ef' : '')};
  :hover {
    border-color: #b3d7ff;
  }
  :active {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
`;
