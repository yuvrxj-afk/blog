import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout';
import IndexPage from './pages/indexPage.js';
import Login from './pages/login';
import Register from './pages/register';
import CreatePost from './pages/createPost';
import { UserContextProvider } from './userContext.js'


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
