import Image from 'next/image'
import React from 'react'
import { MOBILE_NAVIGATIONS, NAVIGATIONS } from 'utils/enums'
import Close from 'utils/icons/Close'
import MobileNavItem from './MobileNavItem'
import NavItem from './NavItem'

export default function MobileNav() {
  return (
    <>
        <div className='navbar_mobileContent'>
            <div className='navbar_mobileHeader'>
                <div className='navbar_mobileLogoContainer'>
                    <Image
                    alt="GOYA"
                    priority={true}
                    layout="fill"
                    objectFit="contain"
                    src={`/images/verticleLogo.svg`}
                    />
                </div>

                <div className='navbar_room'>Room 411</div>
            </div>

            <div className='navbar_mobileItemList'>
                <div className='w-full h-full overflow-y-scroll'>
                    {MOBILE_NAVIGATIONS.map(navItem => {
                        return (
                            <MobileNavItem key={navItem.id} navItem={navItem} />
                        )
                    })}
                </div>  
            </div>

            <div className='navbar_mobileVersion'>
                <div className='navbar_mobileLogoContainer'>
                    <Image
                    alt="GOYA"
                    priority={true}
                    layout="fill"
                    objectFit="contain"
                    src={`/images/colorLogo.svg`}
                    />
                </div>

                <div>
                    Version 1.0.0
                </div>
            </div>
        </div>
    </>
  )
}
