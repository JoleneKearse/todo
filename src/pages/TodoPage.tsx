import Input from "../components/Input";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <main>
       <form action="" className="flex flex-col gap-6">
        <Input
          label="New Todo"
          type="text"
          placeholder="Enter your new todo"
        />
        <TodoList>
            
        </TodoList>
       </form>
    </main>
  );
};

export default TodoPage;
