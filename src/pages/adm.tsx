import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "components/ui/button";

export const Adm: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-6 transition-colors duration-300">
      <Button
        variant="outline"
        onClick={toggleTheme}
        className="absolute top-6 right-6 cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-meta-blue dark:text-meta-blue dark:hover:bg-meta-blue dark:hover:text-meta-dark"
      >
        Mudar para {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
      </Button>

      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-10 text-center shadow-xl transition-colors duration-300">
        <h1 className="bg-linear-to-r from-[#2AD8FF] to-[#0067FF] bg-clip-text text-4xl font-extrabold text-transparent">
          Área Restrita
        </h1>

        <p className="mt-4 text-muted-foreground">
          Login realizado com sucesso.
        </p>

        <Button
          onClick={handleLogout}
          size="lg"
          className="mt-8 w-full cursor-pointer rounded-xl bg-linear-to-r from-[#2AD8FF] to-[#0067FF] text-white font-bold shadow-lg shadow-blue-500/20 transition-opacity hover:opacity-90"
        >
          Sair
        </Button>
      </div>
    </main>
  );
};
