import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

type Views = "login" | "todo";
type Theme = "light" | "dark";

function App() {
  const [view, setView] = useState<Views>("todo");
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className="flex flex-col items-center justify-center relative font-sans">
      <div className="bg-[url('/bg-desktop-light.webp')] bg-top bg-no-repeat h-[200px] md:h-[300px] w-full"></div>
      <Wrapper>
        <Header />
        {view === "login" && (<LoginPage />)}
        {view === "todo" && (<TodoPage />)}
      </Wrapper>
    </div>
  );
}

export default App;
