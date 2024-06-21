import React, { useState, useEffect } from 'react';
import { resetPassword } from '../../api/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/styles.css';

const ResetPassword = () => {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            await resetPassword(token, { newPassword, confirmPassword });
            alert('Password reset successful!');
            navigate('/login');
        } catch (error) {
            alert('Reset failed: ' + error.response.data.error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setToken(params.get('token') || '');
    }, [location]);

    return (
        <div className="container">
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    Show Password
                </label>
                <button type="submit">Reset</button>
            </form>
        </div>
    );
};

export default ResetPassword;
