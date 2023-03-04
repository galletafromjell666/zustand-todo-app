import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { ToDo } from "../interfaces/ToDo";

interface StoredToDo extends ToDo {
  id: string;
}
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
          id: uuidv4(),
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
