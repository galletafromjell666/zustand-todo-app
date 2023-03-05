import useToDo from "../hooks/useToDo";
import { Card } from "./Card";
const CardContainer = () => {
  const { todos } = useToDo();
  if (todos.length < 1) {
    return <h1>No to-dos :c</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <Card key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default CardContainer;
