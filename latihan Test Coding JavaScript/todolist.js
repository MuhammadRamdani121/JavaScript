let todos = [
  { id: 1, text: "Belajar JS", done: false },
  { id: 2, text: "Latihan Logic", done: false },
];

// Tambah Todo
const tambahTodo = [...todos, { id: 3, text: "Belajar React", done: false }];
// console.log(tambahTodo);
// Toggle Status
const ubahTodo = tambahTodo.map((todo) =>
  todo.id === 1 ? { ...todo, done: true } : todo,
);

// Hapus Todo
const cariHapus = ubahTodo.filter((todo) => todo.id !== 2);

console.log(cariHapus);
