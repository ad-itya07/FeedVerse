import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/SupabaseClient";
import { UserContextType } from "../types/contextTypes";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useAuth = (): UserContextType => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
};

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userSession , setUserSession] = useState<any>(null);

  useEffect(() => {
    const userSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching data: ", error);
      } else {
        setUserSession(session);
        setCurrentUser(session?.user);
      }
      setIsLoading(false);
    };

    userSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setCurrentUser(session?.user || null);
        setIsLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
  };

  const value = {
    userSession,
    currentUser,
    isLoading,
    logout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
