import React, { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  contactNumber: string;
  address: string;
  cardNumber: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  register: (newUser: Omit<User, 'id'>) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (updatedData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {



                    const [users, setUsers] = useState<User[]>([]); // regsitered users
                    const [user, setUser] = useState<User | null>(null); // logged in uers



  const register = (newUser: Omit<User, 'id'>) => {
    if (users.find((u) => u.email === newUser.email)) {
      return false; // already existing email
    }
    const id = Date.now().toString();
    const userWithId = { ...newUser, id };
    setUsers([...users, userWithId]);
    setUser(userWithId);
    return true;
  };

  const login = (email: string, password: string) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const updateProfile = (updatedData: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? updatedUser : u))
    );
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};