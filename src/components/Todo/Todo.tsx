import React, { useState } from 'react';
import { CheckBox, TodoItem } from '.';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { useAppDispatch } from '../../redux/store';
import { changeTodoStatus, removeTodo, todoInModal } from '../../redux/slices/todoSlice';

interface TodoPropType {
  id: number;
  text: string;
  completedStatus: boolean | undefined;
}

const Todo: React.FC<TodoPropType> = ({ id, text, completedStatus }) => {
  const [checked, setChecked] = useState(completedStatus);
  const dispatch = useAppDispatch();
  const deleteTodo = () => {
    dispatch(removeTodo(id));
  };
  const changeStatus = () => {
    dispatch(changeTodoStatus({ id: id, completedStatus: !checked }));
  };
  return (
    <TodoItem checked={completedStatus}>
      <CheckBox
        checked={checked}
        onClick={() => {
          setChecked(!checked);
          changeStatus();
        }}
      />
      <p>{text}</p>
      <div>
        <BsFillPencilFill onClick={() => dispatch(todoInModal({ id, text }))} />
        <AiFillDelete color="red" onClick={() => deleteTodo()} />
      </div>
    </TodoItem>
  );
};

export default Todo;
