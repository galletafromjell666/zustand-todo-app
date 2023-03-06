import CardContainer from "./components/CardContainer";
import { MdAddCircleOutline } from "react-icons/md";
import NewTodoForm from "./components/ToDoForm";
import Button from "./components/Button";
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
    <div className="relative h-full ">
      <h1 className="text-xl font-semibold py-2 text-center md:text-3xl">
        Zustand + React-hook-form = To Do App
      </h1>
      <Modal
        appElement={document.getElementById("root") as HTMLElement}
        isOpen={modalIsOpen}
        closeTimeoutMS={100}
        onRequestClose={closeModal}
        contentLabel="New To Do Form"
        className={

          "m-4 md:m-8 mx-auto w-4/5 h-[100hv] p-4 md:p-10 bg-primary rounded-xl drop-shadow-2xl"
        }
        overlayClassName="fixed top-0 left-0 bottom-0 right-0 bg-accent/50"
      >
        <NewTodoForm handleCloseModal={closeModal} />
      </Modal>
      <div className="flex flex-col md:flex-row justify-center items-center p-6 rounded-lg">
        <h1 className="font-medium text-xl mb-4 md:mb-0 md:mr-4">
          You can add new To Do using this button:
        </h1>
        <Button
          onClick={openModal}
          text={"Create To Do"}
          icon={<MdAddCircleOutline className="text-2xl mr-2" />}
          color={"rgb(74 222 128)"} //green-400
          hoverColor={"rgb(22 163 74)"} //green-600
        />
      </div>

      <CardContainer />
    </div>
  );
}

export default App;
