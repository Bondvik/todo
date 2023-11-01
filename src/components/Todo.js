import {useState} from "react";
import Form from "./Form";

export default function Todo ({ todo, onToggleTodo, onUpdateTodo, onDeleteTodo }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="row align-items-center mb-3">
            <div className="col">
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           onChange={() => onToggleTodo(todo.id)}
                           id="flexCheckChecked"
                    />
                    <label
                        className="form-check-label"
                        style={todo.packed ? {textDecoration: 'line-through'} : {}} htmlFor="flexCheckChecked">
                        {todo.text}
                    </label>
                </div>
            </div>
            <div className="col d-flex justify-content-start">
                <label className="date-label text-black-50 d-flex justify-content-center">{todo.date}</label>
            </div>
            <div className="col-auto d-flex align-items-center justify-content-end">
                <button className="btn p-0 pe-3" onClick={openModal}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="#0d6efd"
                        height="1.2em"
                        width="1.2em"
                    >
                        <path d="M8.707 19.707L18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 00-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 000-2.828L19.414 3a2 2 0 00-2.828 0L15 4.586 19.414 9 21 7.414z" />
                    </svg>
                </button>
                <button className="btn p-0" onClick={() => onDeleteTodo(todo.id)}>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="#dc3545"
                        height="1.2em"
                        width="1.2em"
                    >
                        <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                    </svg>
                </button>
            </div>
            <div className="modal" style={modalIsOpen ? {display: 'block'} : {}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit ToDo</h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <Form todo={todo} userAction={onUpdateTodo} closeModal={closeModal} mode={'Edit'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

