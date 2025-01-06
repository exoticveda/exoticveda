import React from 'react';
import { motion } from 'framer-motion';
import './404.css'
const NotFoundPage = () => (
  <div className="not-found-container">
    <motion.div
      className="not-found-content"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <motion.h1
        className="not-found-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
      >
        404
      </motion.h1>
      <motion.p
        className="not-found-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.a
        href="/"
        className="not-found-link"
     
      >
        Go to Homepage
      </motion.a>
    </motion.div>
  </div>
);

export default NotFoundPage;