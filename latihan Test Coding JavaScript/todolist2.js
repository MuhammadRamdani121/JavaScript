let todos = [
  {
    id: 1,
    text: "Makan",
    done: false,
  },
  {
    id: 2,
    text: "Tidur",
    done: true,
  },
  {
    id: 3,
    text: "Ngoding",
    done: false,
  },
];
const togleTodo = todos.filter((todo, id) => todo.id === id);

// console.log(togleTodo(2));
todos.map((data) => {
  return data.id;
});

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Tambah</button>

      <button onClick={() => setCount(0)}>Tambah</button>
    </div>
  );
};

export default App;
