import {useState} from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Title from "./Title";

function App() {
    const [todos, setTodos] = useState([]);
    const [sortBy, setSortBy] = useState('input');

    let sortedTodos;

    if (sortBy === "input")
        sortedTodos = todos;

    if (sortBy === 'description')
        sortedTodos = todos.slice().sort((a, b) => a.text.localeCompare(b.text));

    if (sortBy === 'packed')
        sortedTodos = todos.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    if (sortBy === 'date')
        sortedTodos = todos.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

    function handleAddTodo (todo) {
        setTodos((todos) => [...todos, todo])
    }

    function handleToggleTodo (id) {
        setTodos((todos) => (
            todos.map((todo) => (
                todo.id === id ? { ...todo, packed: !todo.packed } : todo
            ))
        ))
    }

    function handleUpdateTodo (todoUpdate) {
        setTodos((todos) => (
            todos.map((todo) => (
                todo.id === todoUpdate.id ? { ...todo, text: todoUpdate.text, date: todoUpdate.date} : todo
            ))
        ))
    }

    function handleDeleteTodo (id) {
        setTodos(() => todos.filter((todo) => todo.id !== id))
    }

    function handleDeleteTodos () {
        setTodos([])
        setSortBy('input')
    }

  return (
    <div className="App">
        <div className="container mt-5 p-5 bg-light shadow ounded">
            <Title />
            <Form userAction={handleAddTodo} />
            { todos.length > 0 &&
                <div>
                    <div className="row mb-4 border-black-25 border-bottom"></div>
                    <PackingList
                        sortedTodos={sortedTodos}
                        setSortBy={setSortBy}
                        sortBy={sortBy}
                        onToggleTodo={handleToggleTodo}
                        onUpdateTodo={handleUpdateTodo}
                        onDeleteTodo={handleDeleteTodo}
                        onDeleteTodos={handleDeleteTodos}
                    />
                </div>
            }
        </div>
    </div>
  );
}

export default App;
