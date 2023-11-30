import { useState } from 'react';

// import { checkPassword, validateEmail } from '../../utils/helpers';

function loginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(`${email} ${password}`);
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

                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default loginForm;