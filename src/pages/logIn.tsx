import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    navigate('/dashboard');
                }
            });

            return () => unsubscribe();
        });

        return () => clearTimeout(timer);
    }, [auth, navigate]);


    const handleSignIn = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed in:', user);
            navigate('/dashboard');
        } catch (error: any) {
            setError(error.message);
        }
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="xl:w-[700px] px-10 h-[400px] rounded-3xl xl:shadow-xl">
                <h1 className="text-center text-3xl font-bold mt-2 mb-2 text-emerald-400">Connexion</h1>
                <hr />
                <div className="flex justify-center mt-10">
                    <form onSubmit={handleSignIn} className="w-full md:w-[500px]">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="py-3 p-5 rounded-md bg-zinc-50 w-full outline-orange-200 mb-4 focus:outline-orange-200"
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="py-3 p-5 rounded-md bg-zinc-50 w-full outline-orange-200 mb-4 focus:outline-orange-200"
                        />
                        <button type="submit" className="py-3 bg-orange-300 text-white w-full rounded-md font-bold">Se connecter</button>
                    </form>
                </div>
                <div className='flex justify-center mt-4'>
                    <a href='/signIn' className="text-center text-sm mt-2 mb-2 text-emerald-400">S'inscrire</a>
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}


