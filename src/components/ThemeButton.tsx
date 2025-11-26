import { Theme as theme } from "../App";

import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";

type ThemeProps = {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};

const ThemeButton = ({ theme, setTheme }: ThemeProps) => {
  const handleThemeToggle = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={handleThemeToggle}
      type="button"
      aria-label="Toggle Theme"
      className="w-7 rounded-full hover:cursor-pointer"
    >
      {theme === "light" ? (
        <img src={Sun} alt="Light Theme" className="mr-4" />
      ) : (
        <img src={Moon} alt="Dark Theme" className="mr-4" />
      )}
    </button>
  );
};

export default ThemeButton;
