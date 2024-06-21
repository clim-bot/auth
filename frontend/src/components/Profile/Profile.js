import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../api/auth';

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
        <div className="container">
            {user && (
                <div>
                    <h2>Profile</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={handleChangePassword}>Update Password</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
