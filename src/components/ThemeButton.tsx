import { Theme as theme } from "../App";

import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";

type ThemeProps = {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};

const ThemeButton = ({ theme, setTheme }: ThemeProps) => {
  const handleThemeToggle = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newTheme;
    });
  };

  return (
    <button
      onClick={handleThemeToggle}
      type="button"
      aria-label="Toggle Theme"
      className="w-7 rounded-full hover:cursor-pointer"
    >
      {theme === "light" ? (
        <img src={Moon} alt="Switch to dark theme" className="mr-4" />
      ) : (
        <img src={Sun} alt="Switch to light theme" className="mr-4" />
      )}
    </button>
  );
};

export default ThemeButton;
