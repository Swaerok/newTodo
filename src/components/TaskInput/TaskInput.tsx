import React, { useState } from 'react';
import { TaskInputer } from '.';
import { BsInputCursor } from 'react-icons/bs';
import { addTodo } from '../../redux/slices/todoSlice';
import { useAppDispatch } from '../../redux/store';

const TaskInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [customId, setCustomId] = useState(1);
  const handlerChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCustomId(customId + 1);
    dispatch(addTodo({ text: value, id: customId }));
    setValue('');
  };
  return (
    <>
      <TaskInputer>
        <div>
          <BsInputCursor />
        </div>
        <form onSubmit={handleSubmit}>
          <input onChange={handlerChanger} value={value} placeholder="Write your task here..." />
        </form>
      </TaskInputer>
    </>
  );
};

export default TaskInput;
