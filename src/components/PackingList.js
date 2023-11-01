import Todo from "./Todo";

export default function PackingList ({ sortedTodos, onToggleTodo, onUpdateTodo, onDeleteTodo, onDeleteTodos, sortBy, setSortBy }) {
    return (
        <>
            <div className="row mb-5 justify-content-end align-items-center">
                <div className="col-5 d-flex align-items-center p-0">
                    <label htmlFor="inputPassword" className="me-3 text-secondary view-opt-label">Sort</label>
                    <select className="form-select" aria-label="Default select example" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="input">Sort by input order</option>
                        <option value="description">Sort by description</option>
                        <option value="packed">Sort by packed status</option>
                        <option value="date">Sort by date</option>
                    </select>
                </div>
            </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        {sortedTodos.map((todo) => (
                            <Todo todo={todo}
                                  key={todo.id}
                                  onToggleTodo={onToggleTodo}
                                  onUpdateTodo={onUpdateTodo}
                                  onDeleteTodo={onDeleteTodo}
                            />
                        ))}
                    </div>
                </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <button type="button"
                            className="btn btn-danger"
                            onClick={onDeleteTodos}
                    >
                        Clear list
                    </button>
                </div>
            </div>
        </>
    )
}