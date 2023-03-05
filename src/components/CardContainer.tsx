import useToDo from "../hooks/useToDo";
import { Card } from "./Card";
const CardContainer = () => {
  const { todos } = useToDo();
  if (todos.length < 1) {
    return <h1>No to-dos :c</h1>;
  }
  return (
    <div>
      <p>Non completed</p>
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((t) => {
          return <Card key={t.id} {...t} />;
        })}
      <p>Completed</p>
      {todos
        .filter((todo) => todo.isCompleted)
        .map((t) => {
          return <Card key={t.id} {...t} />;
        })}
    </div>
  );
};

export default CardContainer;
