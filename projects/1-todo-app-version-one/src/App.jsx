import AppName from "./components/appName";
import AppTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <>
      <center class="container">
       <AppName />
       <AppTodo />
       <TodoItem />
       <TodoItem />
      </center>
    </>
  );
}

export default App;
