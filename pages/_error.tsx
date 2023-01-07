import OnScrollAnimator from '@/components/common/OnScrollAnimator/OnScrollAnimator'
import Image from 'next/image'
import React from 'react'
import Home from 'utils/icons/Home'
import { NextRouter, useRouter } from 'next/router'

export default function Index() {

  const router:NextRouter = useRouter();

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
        <OnScrollAnimator>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-[20%] aspect-square relative'>
                    <Image
                    alt="GOYA"
                    priority={true}
                    layout="fill"
                    objectFit="contain"
                    src={`/images/verticleLogo.svg`}
                    />
                </div>
                <div className='text-3xl sm:text-4xl md:text-8xl font-bold text-primary'>Page not found</div>

                <div onClick={() => {router.push('/')}} className='bg-[#efefef] rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer mt-10'>
                    <Home size={20} color="gray" />
                </div>
            </div>
        </OnScrollAnimator>
    </div>
  )
}