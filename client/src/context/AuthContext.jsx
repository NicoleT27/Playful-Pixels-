import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action) {
        case 'LOGIN':
            return { user: action.payload };

        case 'LOGOUT':
            return { user: null };

        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    //this will help us keep track of whether we are logged in or logged out
    console.log('AuthContext state: ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}