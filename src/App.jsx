import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    tg?.expand();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-300">
      <div className="text-white text-5xl font-bold tracking-wide">VM</div>
    </div>
  );
}