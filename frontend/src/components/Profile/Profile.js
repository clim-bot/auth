import React, { useState, useEffect } from 'react';
import { getProfile } from '../../api/auth';

const Profile = () => {
    const [user, setUser] = useState(null);

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

    return (
        <div>
            {user && (
                <div>
                    <h2>Profile</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
