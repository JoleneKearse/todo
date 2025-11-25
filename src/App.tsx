import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

type Theme = "light" | "dark";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className="flex flex-col items-center justify-center relative font-sans bg-gray-50">
      <div className="bg-[url('/bg-desktop-light.webp')] bg-top bg-no-repeat h-[200px] md:h-[300px] w-full"></div>
      <Wrapper>
        <Header />
        {isLoading && <p>Loading...</p>}
        {error && <p>Authentication Error: {error.message}</p>}
        {isAuthenticated ? (
          <TodoPage />
        ) : (
          <LoginPage />
        )}
      </Wrapper>
    </div>
  );
}

export default App;
