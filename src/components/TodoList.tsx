import type { ReactNode } from "react";

const TodoList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="bg-gray-100 py-2 pl-6 w-full rounded-sm focus:ring-3 focus:ring-amber-300 outline-none">
      {children}
    </ul>
  );
};

export default TodoList;
