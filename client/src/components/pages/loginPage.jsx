// import { useState } from 'react';

// import { checkPassword, validateEmail } from '../../utils/helpers';

function loginForm() {
    return (
        <div>
            <form id="login-form" className="form login-form">
                <div className="form-group">
                    <label className="formLabel" for="email-login">Email:</label>
                    <input className="form-input form-control" type="text" id="email-login"/>
                </div>
                
                <div className="form-group">
                    <label className="formLabel" for="password-login">Password:</label>
                    <input class="form-input form-control" type="password" id="password-login"/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default loginForm;