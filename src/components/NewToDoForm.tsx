import React from "react";
import { useForm } from "react-hook-form";
import { ToDo } from "../interfaces/ToDo";
import useToDo from "../hooks/useToDo";

const ExampleForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ToDo>();
  const {addTodo} = useToDo() 

  const onSubmit = (data: ToDo) => {
    console.log(data);
    addTodo(data)
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: true, maxLength: 25
          })}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          {...register("description", {
            required: true,
            maxLength: 150
          })}
        />
      </div>
      <div>
        <label htmlFor="personAssigned">Person Assigned:</label>
        <input
          type="text"
          id="personAssigned"
          {...register("personAssigned", {
            required: true,
            maxLength: 25
          })}
        />
      </div>
      <div>
        <label htmlFor="dateOfFinish">Date of Finish:</label>
        <input
          type="date"
          id="dateOfFinish"
          {...register("dateOfFinish", {
            required: true,
          })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExampleForm;
