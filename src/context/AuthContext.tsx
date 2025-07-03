import { createContext, useContext, useEffect, useState } from 'react';
import { apiService } from "@/services/apiService";

interface User {
  email: string;
  name: string;
};

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    apiService.get<User>("/auth/me")
      .then(setUser)
      .catch((err) => {
        console.error("Error fetching user:", err);
        setUser(null);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
