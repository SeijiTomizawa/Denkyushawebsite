import { useEffect, useState } from 'react';

export default function FlashlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Flashlight effect */}
      <div
        id="flashlight"
        style={{
          left: `${position.x - 300}px`,
          top: `${position.y - 300}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Small yellow cursor dot */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          background: '#d4a574',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          boxShadow: '0 0 8px rgba(212, 165, 116, 0.6), 0 0 4px rgba(212, 165, 116, 0.8)',
        }}
      />
    </>
  );
}