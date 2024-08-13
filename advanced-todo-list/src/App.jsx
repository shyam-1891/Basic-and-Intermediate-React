import Todos from "./components/Todos";
import Filterform from "./components/Filterform";
import AddTodo from "./components/AddTodo";
import TodoContextProvider from "./context/TodoContextProvider";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    // <TodoContextProvider>
    <UserContextProvider>
      <h1>Advanced Todo List</h1>

      <Filterform />
      <Todos />

      <AddTodo />
    </UserContextProvider>
    // {/* </TodoContextProvider> */}
  );
}

export default App;
