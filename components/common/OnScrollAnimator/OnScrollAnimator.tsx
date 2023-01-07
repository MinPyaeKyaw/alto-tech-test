import React from 'react'

// motion
import { motion } from 'framer-motion';

export default function OnScrollAnimator({children}:any) {
  return (
    <motion.div 
    transition={{duration: 0.3, delay: 0.1}}
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}>{children}</motion.div>
  )
}
