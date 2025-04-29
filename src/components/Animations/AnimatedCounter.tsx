'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Пропсы компонента
interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  className
}) => {
  const [count, setCount] = useState(0);
  const cleanValue = parseInt(value.replace(/[^0-9]/g, ''), 10); // Убираем все, кроме цифр
  const isPlus = value.includes('+'); // Проверяем на "+"

  useEffect(() => {
    let start = 0;
    const increment = cleanValue / (duration * 60); // 60 FPS

    const counter = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), cleanValue));

      if (start >= cleanValue) {
        clearInterval(counter);
      }
    }, 1000 / 60); // Каждые 16.6мс (примерно 60 FPS)

    return () => clearInterval(counter);
  }, [cleanValue, duration]);

  // Форматируем число с запятыми только если больше 999
  const formattedCount =
    count > 2000 ? count.toLocaleString() : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {formattedCount}
      {isPlus && '+'}
    </motion.div>
  );
};

export default AnimatedCounter;
