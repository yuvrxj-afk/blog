import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout';
import IndexPage from './pages/indexPage.js';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

    </Routes>
  );
}

export default App;
