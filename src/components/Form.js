import {useState} from "react";

export default function Form ({ mode, todo={}, userAction, closeModal }) {
    const [text, setText] = useState(todo.text || '');
    const [date, setDate] = useState(todo.date || convertingCurrentDate());

    function convertingCurrentDate() {
        const fullYear = new Date().getFullYear();
        const date = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
        const month = new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth();
        return `${fullYear}-${month + 1}-${date}`
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!text || !date) return;

        if (mode === 'Edit') {
            userAction({id: todo.id, text, date})
            closeModal()
            return;
        }

        const newTodo = {
            id: text,
            text,
            date,
            packed: false
        }
        userAction(newTodo);
        setText('');
        setDate(convertingCurrentDate());
    }

    return (
        <form className="row flex-column mb-4" style={mode !== 'Edit' ? {alignItems: 'center'} : {}} onSubmit={handleSubmit}>
            <div className="col-md-6 mb-3">
                <input type="text"
                       className="form-control"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       placeholder="Add new..."
                       aria-label="Add new..."
                />
            </div>
            <div className="col-md-6 mb-3">
                <input type="date"
                       className="form-control"
                       value={date}
                       onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="row" style={mode !== 'Edit' ? {justifyContent: 'center'} : {}}>
                <div className="col-md-auto">
                    <button className="btn btn-primary">{mode === 'Edit' ? 'Save' : 'Add'}</button>
                </div>
                {
                    mode === 'Edit' &&
                    <div className="col-md-auto p-0">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                }
            </div>
        </form>
    )


}