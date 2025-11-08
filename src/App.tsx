import { useState } from "react";
import Header from "./components/Header";

type Views = "landing" | "login" | "todos";

function App() {
  const [view, setView] = useState<Views>("landing");
  
  return (
    <>
      <Header />
    </>
  );
}

export default App;
