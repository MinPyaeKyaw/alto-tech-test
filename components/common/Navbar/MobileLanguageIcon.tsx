import React from 'react'

// redux
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { change, selectLanguage } from 'features/languageSlice'
import Image from 'next/image';

export default function MobileLanguageIcon() {

  const dispatch = useAppDispatch();  
  const language = useAppSelector(selectLanguage);

  return (
    <div onClick={() => dispatch(change())}>
        <div className='navbar_mobileFlagWrapper'>
            <Image
            alt="GOYA"
            priority={true}
            layout="fill"
            objectFit="contain"
            src={language === 'en' ? '/images/thFlag.svg' : '/images/enFlag.svg'}
            />
        </div>
    </div>
  )
}
