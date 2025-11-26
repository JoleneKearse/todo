import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

export type Theme = "light" | "dark";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className="flex flex-col items-center justify-start relative font-sans bg-gray-50 dark:bg-navy-900 h-screen">
      <div
        className={`bg-top bg-no-repeat h-[200px] md:h-[300px] w-full ${
          theme === "light"
            ? "bg-[url('/bg-desktop-light.webp')]"
            : "bg-[url('/bg-desktop-dark.webp')]"
        } `}
      ></div>
      <Wrapper>
        <Header theme={theme} setTheme={setTheme} isAuthenticated={isAuthenticated} />
        <main>
          {isLoading && <p>Loading...</p>}
          {error && <p>Authentication Error: {error.message}</p>}
          {isAuthenticated ? <TodoPage /> : <LoginPage />}
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
