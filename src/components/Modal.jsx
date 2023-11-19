import { useDispatch } from "react-redux";
import { editTodo } from "../redux/actions/todoActions";

const Modal = ({todo, close}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = {...todo, text: e.target[1].value};

        dispatch(editTodo(updated))

        close();
    }

  return (
    <div className="modal d-block text-black bg-black bg-opacity-50" >
  <div className="modal-dialog modal-dialog-centered bg">
    <form onSubmit={handleSubmit} className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Todo' yu düzenle</h1>
        <button type="button" className="btn-close" onClick={close}></button>
      </div>
      <div className="modal-body">
        <label>Yeni İsmi Belirle</label>
        <input defaultValue={todo.text} className="form-control" type="text" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={close}>Kapat</button>
        <button type="submit" className="btn btn-primary">Kaydet</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Modal