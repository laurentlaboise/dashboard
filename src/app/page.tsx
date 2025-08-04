"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';      // Correct capitalization
import Navbar from './Navbar';        // Correct capitalization
import MainContent from './MainContent';  // Correct capitalization

export default function Home() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar isHidden={isSidebarHidden} />
      <section id="content">
        <Navbar onToggleSidebar={toggleSidebar} />
        <MainContent />
      </section>
    </>
  );
}
