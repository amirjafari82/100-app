import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
    const [phone, setPhone] = useState("09");

    return (
        <LoginContext.Provider value={{ phone, setPhone }}>
            {children}
        </LoginContext.Provider>
    );
}

function useLogin() {
    const context = useContext(LoginContext);
    if (context === undefined)
        throw new Error("LoginContext was used outside of LoginProvider");

    return context;
}

export { useLogin, LoginProvider };
