import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async(username, email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username, email, password})
        });

        const json = await response.json();

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

    return {signup, isLoading, error}
}