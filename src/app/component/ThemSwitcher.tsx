// "use client";

// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeSwitcher() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const root = window.document.documentElement;
//     const initialTheme = localStorage.getItem("theme") || "light";
//     setTheme(initialTheme);
//     root.classList.toggle("dark", initialTheme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
//       aria-label="Toggle Theme"
//     >
//       {theme === "dark" ? (
//         <Sun className="w-5 h-5 text-yellow-400" />
//       ) : (
//         <Moon className="w-5 h-5 text-gray-900" />
//       )}
//     </button>
//   );
// }
