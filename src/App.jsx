import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleRemoveTodo(index) {
    setTodos((todos) => todos.filter((_todo, _index) => index !== _index));
  }

  function handleAddTodo(event) {
    event.preventDefault();

    const val = event.target.text.value;

    if (!val || todos.includes(val)) return;

    setTodos((todos) => todos.concat(val));

    event.target.text.value = "";
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input name="text" type="text" />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
