import { motion } from 'framer-motion';
import React from 'react';

const MobileIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <motion.path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        initial={{ d: 'M6 12h36M6 24h36M6 36h36' }}
        animate={{
          d: isOpen ? 'M36 12 12 36M12 12l24 24' : 'M6 12h36M6 24h36M6 36h36'
        }}
        exit={{ d: 'M6 12h36M6 24h36M6 36h36' }}
      ></motion.path>
    </svg>
  );
};

export default React.memo(MobileIcon);
