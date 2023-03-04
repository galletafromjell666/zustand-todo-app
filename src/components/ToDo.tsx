import { StoredToDo } from "../interfaces/ToDo";
export const Card = ({
  title,
  description,
  personAssigned,
  dateOfFinish,
  isCompleted,
}: StoredToDo) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};
