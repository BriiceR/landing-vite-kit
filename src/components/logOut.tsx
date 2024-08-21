import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const Logout = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSignOut = async () => {
        setError('');
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        }).catch(() => {
            // An error happened.
        });
    };

    return (
        <div>
            <button onClick={handleSignOut} className="p-3 bg-orange-300 text-white w-full rounded-md font-bold shadow-md">
                Déconnection
            </button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Logout;
