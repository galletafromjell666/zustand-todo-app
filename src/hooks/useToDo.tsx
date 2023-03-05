import { create, StateCreator } from "zustand";
import { ToDo, StoredToDo } from "../interfaces/ToDo";
import { persist, devtools } from "zustand/middleware";

interface TodoState {
  todos: StoredToDo[];
  addTodo: ({}: ToDo) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}

const todoSlice: StateCreator<TodoState> = (set) => ({
  todos: [],
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
});

const useToDo = create<TodoState>()(
  persist(
    devtools((...a) => ({
      ...todoSlice(...a),
    })),
    { name: "ToDo-persist" }
  )
);

export default useToDo;
