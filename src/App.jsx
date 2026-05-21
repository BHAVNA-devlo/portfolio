import { useEffect, useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { NavDock } from './components/NavDock';
import { PopupPanel } from './components/PopupPanel';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activePanel ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePanel]);

  return (
    <>
      <AmbientBackground />
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />
      <Hero />
      <PopupPanel activePanel={activePanel} onClose={() => setActivePanel(null)} />
      <NavDock activePanel={activePanel} onSelect={setActivePanel} />
    </>
  );
}
