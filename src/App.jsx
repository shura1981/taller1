import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/home.jsx'
import Blog from './pages/blog.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import NotFound from './pages/404.jsx'
import Post from './pages/post.jsx'
import Tiendas from './pages/tiendas.jsx';
import Login from './pages/login.jsx';
import Layout from './pages/layout.jsx';
import AppComponent from './pages/appComponent.jsx';
import ScrollToTop from './components/scroll-to-top.jsx';
import GuardValidate from './guards/validate.jsx';
const Admin = {
  id: 1,
  rol: 'admin',
  name: 'Sebastian',
}

const User = {
  id: 2,
  rol: 'user',
  name: 'Valentina',
}

const Client = {
  id: 3,
  rol: 'client',
  name: 'diego',
}


function App() {

  const getUser = () => {
    const userStorage = localStorage.getItem('userReact');
    if (userStorage) {
      return JSON.parse(userStorage);
    }
    return null;
  }

  const user = getUser();
  ScrollToTop();
  return (
    <>
      <Routes>
        <Route element={<GuardValidate isAllowed={Boolean(user)} redirecTo="/login" />}>
          <Route path="/" element={<AppComponent />}>
            <Route index element={<Home />} />
            <Route path="about/*" element={<About />}>
              <Route path="tiendas" element={<Tiendas />} />
            </Route>
            <Route path="acerca-de" element={<Navigate replace={true} to='/about' />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:post" element={<Post />} />
            <Route path="place-holder" element={<Layout />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="/login" element={
          <GuardValidate isAllowed={Boolean(user) ? false : true} redirecTo="/">
            <Login />
          </GuardValidate>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  )
}

export default App
