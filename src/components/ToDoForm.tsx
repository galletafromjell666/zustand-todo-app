import Button from "./Button";
import useToDo from "../hooks/useToDo";
import { useForm } from "react-hook-form";
import { ToDo } from "../interfaces/ToDo";
import { SlClose } from "react-icons/sl";
import { MdAddCircleOutline } from "react-icons/md";
interface ToDoFormProps {
  handleCloseModal: () => void;
}

const ToDoForm = ({ handleCloseModal }: ToDoFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ToDo>();
  const { addTodo } = useToDo();

  const onSubmit = (data: ToDo) => {
    console.log(data);
    addTodo(data);
    reset();
    handleCloseModal();
  };

  return (
    <form
      className="relative h-full flex flex-col justify-evenly text-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SlClose
        className="absolute right-0 top-0 text-3xl cursor-pointer hover:translate-y-0.5"
        onClick={handleCloseModal}
      />
      <h1 className="text-center text-2xl font-bold">Create New To-Do</h1>
      <div className="form-div">
        <label htmlFor="title">Title:</label>
        {errors.title && errors.title.type === "required" && (
          <span className="text-sm text-red-500">required</span>
        )}
        {errors.title && errors.title.type === "maxLength" && (
          <span className="text-sm text-red-500">Max length exceeded</span>
        )}
        <input
          type="text"
          id="title"
          {...register("title", {
            required: true,
            maxLength: 20,
          })}
        />
      </div>
      <div className="form-div">
        <label htmlFor="description">Description:</label>
        {errors.description && errors.description.type === "required" && (
          <span className="text-sm text-red-500">required</span>
        )}
        {errors.description && errors.description.type === "maxLength" && (
          <span className="text-sm text-red-500">Max length exceeded</span>
        )}
        <textarea
          id="description"
          {...register("description", {
            required: true,
            maxLength: 125,
          })}
        />
      </div>
      <div className="form-div">
        <label htmlFor="personAssigned">Person Assigned:</label>
        {errors.personAssigned && errors.personAssigned.type === "required" && (
          <span className="text-sm text-red-500">required</span>
        )}
        {errors.personAssigned &&
          errors.personAssigned.type === "maxLength" && (
            <span className="text-sm text-red-500">Max length exceeded</span>
          )}
        <input
          type="text"
          id="personAssigned"
          {...register("personAssigned", {
            required: true,
            maxLength: 25,
          })}
        />
      </div>
      <div className="form-div ">
        <label htmlFor="dateOfFinish">Date of Finish:</label>
        {errors.dateOfFinish && errors.dateOfFinish.type === "required" && (
          <span className="text-sm text-red-500">required</span>
        )}
        <input
          type="date"
          id="dateOfFinish"
          {...register("dateOfFinish", {
            required: true,
          })}
        />
      </div>
      <div className="mx-auto pt-4">
        <Button
          type="submit"
          text={"Add To Do"}
          icon={<MdAddCircleOutline className="text-2xl mr-2" />}
          color={"rgb(74 222 128)"} //green-400
          hoverColor={"rgb(22 163 74)"} //green-600
        />
      </div>
    </form>
  );
};

export default ToDoForm;
