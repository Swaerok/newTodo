import styled from 'styled-components';

export const TaskInputer = styled.div`
  width: 40%;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
  input {
    ::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 7px;
    padding: 10px;
    padding-left: 40px;
    width: 100%;
    font-size: 20px;
    box-sizing: border-box;
  }
  div {
    position: absolute;
    font-size: 30px;
    top: 7px;
    left: 7px;
  }
`;
