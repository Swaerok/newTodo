import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from './styled';
import { RootState } from '../../redux/store';
import Todo from '../Todo/Todo';

const TodoField: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <Field<any>>
      {todos
        ?.filter((item) => !item.completedStatus)
        .map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            completedStatus={item.completedStatus}
          />
        ))}
      {todos?.map((item) => {
        if (item.completedStatus) {
          return (
            <Todo
              key={item.id}
              id={item.id}
              text={item.text}
              completedStatus={item.completedStatus}
            />
          );
        }
      })}
    </Field>
  );
};

export default TodoField;
