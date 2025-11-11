import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";

type Views = "login" | "todos";
type Theme = "light" | "dark";

function App() {
  const [view, setView] = useState<Views>("login");
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className="flex flex-col items-center justify-center relative font-sans">
      <div className="bg-[url('/bg-desktop-light.webp')] bg-top bg-no-repeat h-[200px] md:h-[300px] w-full"></div>
      <Wrapper>
        <Header />
        {view === "login" && (<LoginPage />)}
      </Wrapper>
    </div>
  );
}

export default App;
