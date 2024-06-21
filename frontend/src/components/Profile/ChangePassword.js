import React, { useState } from 'react';
import { changePassword } from '../../api/auth';
import '../../styles/styles.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            await changePassword(token, { oldPassword, newPassword, confirmPassword });
            alert('Password changed successfully!');
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <div className="container">
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm New Password"
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
                <button type="submit">Change</button>
            </form>
        </div>
    );
};

export default ChangePassword;
