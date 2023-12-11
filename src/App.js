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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index path="blogs/:id" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
