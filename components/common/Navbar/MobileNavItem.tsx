import React from 'react'
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

// utils
import { NavigationsInterface } from 'utils/interfaces'

// redux
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { change, selectLanguage } from 'features/languageSlice'
import { langConvertor } from 'utils/functions';

interface Props {
    navItem: NavigationsInterface
}

export default function MobileNavItem({navItem}: Props) {

  const router:NextRouter = useRouter();

  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();

  const handleRoute = () => {

    if(navItem.isLink) {
      router.push(navItem.href)
    }else {
      dispatch(change())
    }

  }

  return (
    <div onClick={handleRoute} className='navbar_mobileItems' key={navItem.id}>
        <div className='navbar_mobileItemsWrapper'>
            <div className='navbar_mobileItemIcon'>{navItem.icon}</div>
            <div className='text-[gray] flex justify-between w-full'>
                {langConvertor(navItem.name, language)}
                <div className='text-primary'>{!navItem.isLink && 'Change'}</div>
            </div>
        </div>
    </div>
  )
}
