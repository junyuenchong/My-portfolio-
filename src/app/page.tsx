'use client'

import { useEffect, useState } from "react";
import AboutPage from "./components/About/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <AboutPage  />
      <Service  />
      <Contact  />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}