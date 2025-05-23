
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'parent' | 'teacher' | 'admin';
  studentId?: string;
  grade?: string;
  dateOfBirth?: string;
  gender?: string;
  childStudentId?: string;
  relationship?: string;
  employeeId?: string;
  department?: string;
  subjectsTaught?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('schoolUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would be an API call
    const users = JSON.parse(localStorage.getItem('schoolUsers') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('schoolUser', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('schoolUsers') || '[]');
      const newUser = {
        id: Date.now().toString(),
        ...userData,
      };
      users.push(newUser);
      localStorage.setItem('schoolUsers', JSON.stringify(users));
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('schoolUser');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
