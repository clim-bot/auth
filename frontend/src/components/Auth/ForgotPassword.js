import React, { useState } from 'react';
import { forgotPassword } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email);
            alert('If the email exists, a reset password link has been sent.');
            navigate('/login');
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
