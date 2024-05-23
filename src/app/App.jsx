'use client';

import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';

import { useEffect } from 'react';

import { useStore } from './store/app-store';

export const App = (props) => {

  const store = useStore();

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) 
};