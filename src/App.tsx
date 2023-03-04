import { Card } from "./components/ToDo";
import CardContainer from "./components/CardContainer";
import NewTodoForm from "./components/ToDoContainer";

function App() {
  return (
    <div>
      <NewTodoForm />
      <CardContainer/>
    </div>
  );
}

export default App;
