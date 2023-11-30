import { useState } from 'react';

// import { checkPassword, validateEmail } from '../../utils/helpers';

function signupForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(`${email} ${password}`);
    }

    return (
        <div>
            <form id="signup-form" className="form signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="formLabel" for="username-signup">Username:</label>
                    <input className="form-input form-control" type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
                </div>
                
                <div className="form-group">
                    <label className="formLabel" for="email-signup">Email:</label>
                    <input className="form-input form-control" type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                
                <div className="form-group">
                    <label className="formLabel" for="password-signup">Password:</label>
                    <input class="form-input form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>

                <button type="submit">Sign up</button>
            </form>
        </div>

    )
}

export default signupForm;