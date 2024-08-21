import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { LogIn } from './pages/logIn';
// import { SignIn } from './pages/signIn';
// import { Dashboard } from './pages/dashboard';
import { Home } from './pages/Home'



export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}