import React, {createContext, useState} from "react";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({isAuth: false, user: ''});


    function login(mail) {

        setAuth({isAuth: true, user: mail});
    }
    function logout() {
        setAuth({isAuth: false, user: ''});
    }

    const data = {auth, login, logout};


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;