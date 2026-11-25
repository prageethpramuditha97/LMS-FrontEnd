
import React, { useEffect, useState } from 'react';

interface LoadingModalProps {
  isOpen: boolean;
}

const LoadingPage: React.FC<LoadingModalProps> = ({ isOpen }) => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none backdrop-blur-[2px]">
      <div className="flex flex-col items-center">

        {/* Loading Spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Animated Loading Text */}
        <p className="mt-3 text-sm text-gray-600 font-medium">
          Loading
          <span className="inline-block w-5 text-left">
            {'.'.repeat(dots)}
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoadingPage;
