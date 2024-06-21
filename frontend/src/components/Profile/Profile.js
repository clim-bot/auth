import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../api/auth';
import '../../styles/styles.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await getProfile(token);
                setUser(response.data.user);
            } catch (error) {
                alert('Error: ' + error.response.data.error);
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = () => {
        navigate('/logout');
    };

    const handleChangePassword = () => {
        navigate('/profile/change-password');
    };

    return (
        <div className="profile-container">
            {user && (
                <div className="profile-card">
                    <h2 className="profile-heading">Profile</h2>
                    <p className="profile-item"><strong>Name:</strong> {user.name}</p>
                    <p className="profile-item"><strong>Email:</strong> {user.email}</p>
                    <div className="profile-actions">
                        <button className="btn-primary" onClick={handleLogout}>Logout</button>
                        <button className="btn-secondary" onClick={handleChangePassword}>Update Password</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
