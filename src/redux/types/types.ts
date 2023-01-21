export interface ModalWindowType {
  id: number | null;
  text: string;
  active: boolean;
}
export interface TodoTasktype {
  id: number;
  text: string;
  completedStatus?: boolean;
}
export interface TodoSliceState {
  modalWindow: ModalWindowType;
  todos: TodoTasktype[];
}
