import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'customer' | 'agent' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  role: UserRole;
  verified?: boolean;
  joinDate?: string;
  // Agent-specific fields
  agency?: string;
  properties?: number;
  rating?: number;
  // Admin-specific fields
  permissions?: string[];
}

interface AuthContextType {
  user: User | null;
  role: UserRole;
  setRole: (role: UserRole) => void;
  updateUser: (user: Partial<User>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultUsers: Record<UserRole, User> = {
  customer: {
    id: '1',
    name: 'John Mwangi',
    email: 'john.mwangi@email.com',
    phone: '+255 712 345 678',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    role: 'customer',
    verified: true,
    joinDate: 'January 2024',
  },
  agent: {
    id: '2',
    name: 'Sarah Kimani',
    email: 'sarah.kimani@iproperties.co.tz',
    phone: '+255 713 456 789',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    role: 'agent',
    verified: true,
    agency: 'IPO Real Estate',
    properties: 47,
    rating: 4.8,
    joinDate: 'June 2022',
  },
  admin: {
    id: '3',
    name: 'David Moshi',
    email: 'david.moshi@ipoadmin.co.tz',
    phone: '+255 714 567 890',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    role: 'admin',
    verified: true,
    joinDate: 'March 2021',
    permissions: ['all'],
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('customer');
  const [user, setUser] = useState<User>(defaultUsers.customer);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    setUser(defaultUsers[newRole]);
  };

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => prev ? { ...prev, ...updates } : prev);
  };

  const logout = () => {
    setRole('customer');
  };

  return (
    <AuthContext.Provider value={{ user, role, setRole, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
