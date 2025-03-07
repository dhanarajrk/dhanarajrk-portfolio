'use client';
import { useEffect } from 'react';
import fluidCursor from '../hooks/use-FluidCursor.js';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-2">
      <canvas id="fluid" className="w-screen h-screen pointer-events-none fixed top-0 left-0 z-[-1] mix-blend-overlay opacity-50"/>
    </div>
  );
};

export default FluidCursor;
