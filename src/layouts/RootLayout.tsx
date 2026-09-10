import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatedBackground } from '../components/AnimatedBackground';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <AnimatedBackground />
      <main className="relative z-10 w-full min-h-screen flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
