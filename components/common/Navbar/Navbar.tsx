import React, {useState} from 'react'
import Image from 'next/image'

// framer motion
import { motion } from "framer-motion"

// utils
import Noti from 'utils/icons/Noti'
import { NAVIGATIONS } from 'utils/enums'

// components
import NavItem from './NavItem'
import Burger from 'utils/icons/Burger'
import MobileNav from './MobileNav'
import Close from 'utils/icons/Close'

// redux
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { change, selectLanguage } from 'features/languageSlice'

interface Props {
    children: any
}

export default function Navbar({children}:Props) {

  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);

  const [mobileVis, setMobileVis] = useState<boolean>(false);

  const handleOpenMobileVis = ():void => {
    setMobileVis(true);
    document.body.style.overflow = "hidden";
  }

  const handleCloseMobileVis = ():void => {
    setMobileVis(false);
    document.body.style.overflow = "initial";
  }

  return (
    <div className='navbar'>
        <div className='navbar_container'>
            <div className='navbar_wrapper'>
                <div onClick={handleOpenMobileVis} className='navbar_burgerContainer'>
                    <>
                        <Burger size={15} color={'white'} />
                    </>
                </div>
                <div className='navbar_contents'>
                    <div className='navbar_logoContainer'>
                        <Image
                        alt="GOYA"
                        priority={true}
                        layout="fill"
                        objectFit="contain"
                        src={`/images/logo.svg`}
                        />
                    </div>

                    <div className='navbar_navItemList'>
                        {NAVIGATIONS.map(navItem => {
                            return (
                                <NavItem key={navItem.id} navItem={navItem} />
                            )
                        })}
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='navbar_flagContainer' onClick={() => dispatch(change())}>
                        <div className='navbar_flagWrapper'>
                            <Image
                            alt="GOYA"
                            priority={true}
                            layout="fill"
                            objectFit="contain"
                            src={language === 'en' ? '/images/thFlag.svg' : '/images/enFlag.svg'}
                            />
                        </div>
                    </div>
                    <Noti size={15} color={'white'} />
                </div>
            </div>
        </div>

        {/* Page Contents */}
        <motion.div 
        initial={{ x: 0 }}
        animate={{ x: mobileVis ? '75%' : 0 }}
        transition={{ duration: 0.3 }}>
            {children}
        </motion.div>

        {/* Mobile Burger Navbar */}
        {mobileVis && <div onClick={handleCloseMobileVis} className='navbar_mobileOverlay'></div>}

        <motion.div 
        className='navbar_mobileContentContainer'
        initial={{ x: '-100%' }}
        animate={{ x: mobileVis ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}>
            <MobileNav />

            {mobileVis && 
            <div className='navbar_mobileCloser'>
                <Close size={20} color={'white'} />
            </div>}
        </motion.div>
    </div>
  )
}
