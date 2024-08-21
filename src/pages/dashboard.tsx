import { Logout } from '../components/logOut';

export const Dashboard = () => {
    return (
        <div className="flex justify-around h-screen mt-4">
            <h1 className="text-center text-3xl font-bold mt-2 mb-2 text-emerald-400">Dashboard</h1>

            <Logout />

        </div>
    )
}