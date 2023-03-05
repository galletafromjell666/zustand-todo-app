import { StoredToDo } from "../interfaces/ToDo";
import useToDo from "../hooks/useToDo";
export const Card = ({
  id,
  title,
  description,
  personAssigned,
  dateOfFinish,
  isCompleted,
}: StoredToDo) => {
  const { removeTodo, markAsCompleted } = useToDo();
  const handleRemoveFromState = (id: string) => {
    removeTodo(id);
  };

  const handleMarkAsCompleted = (id: string) => {
    markAsCompleted(id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{isCompleted ?  "completed!":"not completed"  }</h3>
      <button
        onClick={() => {
          handleRemoveFromState(id);
        }}
      >
        Remove!
      </button>
      <button
        onClick={() => {
          handleMarkAsCompleted(id);
        }}
      >
        Mark as done
      </button>
    </div>
  );
};
