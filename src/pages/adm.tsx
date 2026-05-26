import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export const Adm: React.FC = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gray-100 px-6 transition-colors duration-300 dark:bg-meta-dark">
      {/* Botão de Tema */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 cursor-pointer rounded-xl border-2 border-[#0067FF] px-4 py-2 text-sm font-bold text-[#0067FF] transition-all hover:bg-[#0067FF] hover:text-white dark:border-meta-blue dark:text-meta-blue dark:hover:bg-meta-blue dark:hover:text-meta-dark"
      >
        Mudar para {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
      </button>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-colors duration-300 dark:border-gray-700 dark:bg-slate-800">
        <h1 className="bg-linear-to-r from-[#2AD8FF] to-[#0067FF] bg-clip-text text-4xl font-extrabold text-transparent">
          Área Restrita
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Login realizado com sucesso.
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 w-full cursor-pointer rounded-xl bg-linear-to-r from-[#2AD8FF] to-[#0067FF] py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition-opacity hover:opacity-90"
        >
          Sair
        </button>
      </div>
    </main>
  );
};
