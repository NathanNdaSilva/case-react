import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const isLoginValid = login(email, password);

    if (isLoginValid) {
      navigate("/adm");
    } else {
      setError(
        "Credenciais inválidas. Verifique os dados com a Meta Consultoria.",
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6 text-gray-900 transition-colors duration-300 dark:bg-meta-dark dark:text-gray-100">
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 cursor-pointer rounded-xl border-2 border-[#0067FF] px-4 py-2 text-sm font-bold text-[#0067FF] transition-all hover:bg-[#0067FF] hover:text-white dark:border-meta-blue dark:text-meta-blue dark:hover:bg-meta-blue dark:hover:text-meta-dark"
      >
        Mudar para {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
      </button>

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl transition-colors duration-300 dark:border-gray-700 dark:bg-slate-800">
        <div className="mb-8 text-center">
          <h1 className="bg-linear-to-r from-[#2AD8FF] to-[#0067FF] bg-clip-text text-3xl font-extrabold text-transparent">
            Meta Consultoria
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Portal da Capacitação Interna
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email Corporativo
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu-nome@metaconsultoria.com"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 transition-colors focus:border-[#0067FF] focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-meta-blue"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Senha de Acesso
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 transition-colors focus:border-[#0067FF] focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-meta-blue"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-500 dark:bg-red-950/30 dark:text-red-400">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-linear-to-r from-[#2AD8FF] to-[#0067FF] py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition-opacity hover:opacity-90"
          >
            Acessar Sistema
          </button>
        </form>
      </div>
    </main>
  );
};
