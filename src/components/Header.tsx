import { Theme as theme } from "../App";

import ThemeButton from "./ThemeButton";
import LogoutButton from "./LogoutButton";

type HeaderProps = {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
  isAuthenticated: boolean; 
};

const Header = ({ theme, setTheme, isAuthenticated }: HeaderProps) => {
  return (
    <header className="uppercase text-gray-50 font-bold text-4xl tracking-widest outline-blue-900 flex items-center justify-between mb-14">
      <h1>Todo</h1>
      <div className="flex items-center gap-2">
        <ThemeButton theme={theme} setTheme={setTheme} />
        {isAuthenticated && <LogoutButton />}
      </div>
    </header>
  );
};

export default Header;
