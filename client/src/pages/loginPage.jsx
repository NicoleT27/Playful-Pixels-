import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import './login.css'

// import { checkPassword, validateEmail } from '../../utils/helpers';

function loginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);
        console.log(error);
    }

    return (
        <div>
            <form id="login-form" className="form login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="formLabel" for="email-login">Email:</label>
                    <input className="form-input form-control" type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                
                <div className="form-group">
                    <label className="formLabel" for="password-login">Password:</label>
                    <input class="form-input form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>

                <button  className="submitBtn" disabled = {isLoading} type="submit ">Submit</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>

    )
}

export default loginForm;
