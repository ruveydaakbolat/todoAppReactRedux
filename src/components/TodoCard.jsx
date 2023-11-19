import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { editTodo, removeTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete(`/todos/${todo.id}`).then(() => {
      dispatch(removeTodo(todo.id));
    });
  };

  const handleUpdate = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    dispatch(editTodo(updated));
  };

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
        <p>{new Date(todo.created_at).toLocaleDateString()}</p>

        <button onClick={() => setIsOpen(true)} className="btn btn-primary">
          Düzenle
        </button>
        <button onClick={handleUpdate} className="btn btn-success mx-4">
          {todo.is_done ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
      </div>

      {isOpen && (
        <Modal
          close={() => {
            setIsOpen(false);
          }}
          todo={todo}
        />
      )}
    </>
  );
};

export default TodoCard;
