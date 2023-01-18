import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Field } from '.';
import { RootState } from '../../redux/store';
import Todo from '../Todo/Todo';

const TodoField: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  console.log(todos);
  return (
    <Field<any>>
      {todos &&
        todos.map((item) => {
          if (!item.completedStatus) {
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
      {todos &&
        todos.map((item) => {
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
