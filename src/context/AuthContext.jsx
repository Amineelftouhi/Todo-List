import users from "../data/users.json";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("AUTHENTICATED") === "true";
    });

    const [user, setUser] = useState(() => {
        const userId = sessionStorage.getItem("USER_ID");

        if (!userId) {
            return null;
        }

        return users.find(
            (item) => item.id === Number(userId)
        ) || null;
    });

    const login = (email, password) => {
        const foundUser = users.find(
            (item) =>
                item.email === email &&
                item.password === password
        );

        if (foundUser) {
            sessionStorage.setItem("AUTHENTICATED", "true");
            sessionStorage.setItem("USER_ID", foundUser.id);

            setIsAuthenticated(true);
            setUser(foundUser);

            return true;
        }

        return false;
    };

    const logout = () => {
        sessionStorage.removeItem("AUTHENTICATED");
        sessionStorage.removeItem("USER_ID");

        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
