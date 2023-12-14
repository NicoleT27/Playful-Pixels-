import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const data = {email, password};
        const jsonData = JSON.stringify(data);

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: jsonData
        });

        const json = await response.json();

        console.log("json:" + json);

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            //save json webtoken to local storage in case user closes page and reopens before session expires
            localStorage.setItem('user', JSON.stringify(json));

            //update authcontext
            dispatch({type: 'LOGIN', payload: json});

            setIsLoading(false);
        }
    }

    return {login, isLoading, error};
}