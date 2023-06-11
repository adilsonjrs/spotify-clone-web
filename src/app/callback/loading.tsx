'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex mt-40 justify-center">
      {isLoading &&
        <div className='flex flex-col items-center gap-6'>
          <motion.div
            className="w-16 h-16 border-6 border-gray-300 border-t-4 border-b-4 rounded-full animate-spin"
            style={{ borderTopColor: '#5fff02', borderBottomColor: '#19ad21' }}
            animate={{
              rotate: 360,
              transition: { duration: 1, repeat: Infinity, ease: 'linear' },
            }}
          />
          <div className="text-4xl font-normal ml-4">Carregando...</div>
        </div>
      }
    </div>
  );
};

export default LoadingSpinner;

