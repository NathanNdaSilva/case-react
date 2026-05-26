import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Login } from "./pages/Login";
import { Adm } from "./pages/Adm";

// Wrapper de Rota Protegida (O Segurança do Sistema)
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();

  // Se o estado for falso, barra o consultor e joga de volta pro login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* REDIRECIONAMENTO RAIZ: Entrou no site sem rota, vai para o login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Rota Pública */}
            <Route path="/login" element={<Login />} />

            {/* Rota Privada Segura */}
            <Route
              path="/adm"
              element={
                <ProtectedRoute>
                  <Adm />
                </ProtectedRoute>
              }
            />

            {/* REDIRECIONAMENTO CURINGA: Digitou rota errada, vai para o login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
