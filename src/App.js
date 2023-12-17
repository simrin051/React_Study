import './App.css';
import { Layout } from './components/Layout';
import { Contact } from './components/Contact';
import { Blogs } from './components/Blogs';
import { Profile } from './components/Profile';
import { NoPage } from './components/NoPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}
  from 'react-router-dom';
import AuthContext from "./contexts/AuthContext";
import { useState } from 'react';

function App() {
  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthContext.Provider value={{ status: authstatus, login: login }}>
            <Layout />
          </AuthContext.Provider>
        } />
        <Route index path="blogs/:id" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
