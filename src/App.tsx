import CardContainer from "./components/CardContainer";
import NewTodoForm from "./components/ToDoForm";
import Modal from "react-modal";
import { useState } from "react";
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <h1>Zustand + React-hook-form = To Do App</h1>
      <Modal
        isOpen={modalIsOpen}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="New To Do Form"
        className={"m-8 lg:m-16 p-10 bg-primary rounded-xl drop-shadow-2xl"}
        overlayClassName="fixed top-0 left-0 bottom-0 right-0 bg-accent/50"
      >
        <NewTodoForm handleCloseModal={closeModal} />
      </Modal>
      <button onClick={openModal}>Open Form</button>
      <CardContainer />
    </div>
  );
}

export default App;
