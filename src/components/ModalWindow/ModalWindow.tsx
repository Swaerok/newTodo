import React, { useEffect, useState } from 'react';
import { DarkSide, EditingButton, EditingWindow } from '.';
import { deactivateModal, updateTodoText } from '../../redux/slices/todoSlice';
import { useAppDispatch } from '../../redux/store';

interface ModalWindowProps {
  id: number | null;
  text: string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ id, text }) => {
  const [modalValue, setModalValue] = useState(text);
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handelChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalValue(event.target.value);
  };
  const deactivateModalWindow = () => {
    dispatch(deactivateModal(false));
  };
  const updateTodo = () => {
    console.log(id);
    if (id) {
      dispatch(updateTodoText({ id: id, text: modalValue }));
      dispatch(deactivateModal(false));
    }
  };
  useEffect(() => {
    console.log(1);
    inputRef.current?.focus();
  }, []);

  return (
    <DarkSide>
      <EditingWindow>
        <h2>Update Your Task</h2>
        <input ref={inputRef} value={modalValue} onChange={handelChanger} />
        <div>
          <EditingButton onClick={deactivateModalWindow}>Cancel</EditingButton>
          <EditingButton onClick={updateTodo} color="lime">
            Update
          </EditingButton>
        </div>
      </EditingWindow>
    </DarkSide>
  );
};

export default ModalWindow;
