import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { ToDo, StoredToDo } from "../interfaces/ToDo";

interface TodoState {
  todos: StoredToDo[];
  addTodo: ({}: ToDo) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}

const useToDo = create<TodoState>((set) => ({
  // initial state
  todos: [],
  // methods for manipulating state
  addTodo: ({ title, description, personAssigned, dateOfFinish }: ToDo) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          title,
          personAssigned,
          description,
          dateOfFinish,
          isCompleted: false,
        } as StoredToDo,
      ],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? ({ ...todo, completed: true } as StoredToDo) : todo
      ),
    }));
  },
}));
mountStoreDevtool("ToDo", useToDo);
export default useToDo;
