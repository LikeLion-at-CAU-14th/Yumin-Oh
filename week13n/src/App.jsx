import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Layout from './components/layout/Layout';
import { UserInfoProvider } from './context/UserInfoContext';


const App = () => {

  return (
    <UserInfoProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<Mypage/>} />
        </Routes>
      </Layout>
    </UserInfoProvider>
  );
}

export default App