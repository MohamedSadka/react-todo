// import TodoCls from "./AppType/ClassComp/TodoCls";
import { TodoProvider } from "./AppType/TodoContext";
import TodoFC from "./AppType/FunctionsComp/TodoFC";

const App = () => {
  return (
    <TodoProvider>
      <TodoFC />
    </TodoProvider>
  );
};

export default App;
