import React from 'react';
import Head from './components/Head/Head';
import TaskInput from './components/TaskInput/TaskInput';
import styled from 'styled-components';
import ClearButton from './components/ClearButton/ClearButton';
import TodoField from './components/TodoField/TodoField';
import ModalWindow from './components/ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './redux/store';
import { clearTodos, deleteCompleted } from './redux/slices/todoSlice';

const App: React.FC = () => {
  const { id, text, active } = useSelector((state: RootState) => state.todo.modalWindow);
  const dispatch = useAppDispatch();

  return (
    <>
      {active && <ModalWindow id={id} text={text} />}
      <Container>
        <Head />
        <TaskInput />
        <ButtonCotainer>
          <ClearButton func={() => dispatch(clearTodos())} title="Clear All" />
          <ClearButton func={() => dispatch(deleteCompleted())} title="Clear Completed" />
        </ButtonCotainer>
        <TodoField />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonCotainer = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  margin-top: 30px;
`;
