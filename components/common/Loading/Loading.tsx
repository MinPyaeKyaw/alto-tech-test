import React from 'react'
import Lottie from "lottie-react";
import loading from "utils/lotties/loading.json"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Loading({setLoading}:any) {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden'>
        <motion.div 
         className='w-full h-[100vh] flex flex-col items-center justify-center'
        initial={{ y: '-100%' }}
        animate={{ y: loading ? 0 : "100%" }}
        exit={{ y: '-100%' }}>
            <Lottie className='w-[30%]' animationData={loading} loop={false} onComplete={() => setLoading(false)} />
        </motion.div>
      </div>
  )
}
