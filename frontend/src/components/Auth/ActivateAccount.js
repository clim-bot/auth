import React, { useState, useEffect } from 'react';
import { activateAccount } from '../../api/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const ActivateAccount = () => {
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleActivate = async () => {
        try {
            await activateAccount(token);
            alert('Account activated successfully!');
            navigate('/login');
        } catch (error) {
            alert('Activation failed: ' + error.response.data.error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setToken(params.get('token') || '');
    }, [location]);

    return (
        <div>
            <h2>Activate Account</h2>
            <button onClick={handleActivate}>Activate</button>
        </div>
    );
};

export default ActivateAccount;
