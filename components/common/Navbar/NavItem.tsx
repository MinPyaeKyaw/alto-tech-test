import Link from 'next/link'
import React from 'react'
import { langConvertor } from 'utils/functions'
import { NavigationsInterface } from 'utils/interfaces'

// redux
import { useAppSelector } from 'hooks/hooks';
import { selectLanguage } from 'features/languageSlice'

interface Props {
    navItem: NavigationsInterface
}

export default function NavItem({navItem}: Props) {

  const language = useAppSelector(selectLanguage);

  return (
    <Link className='navbar_items' key={navItem.id} href={navItem.href}>
        <div className='navbar_itemsWrapper'>
            <div className='navbar_itemIcon'>{navItem.icon}</div>
            <div>
                {langConvertor(navItem.name, language)}
            </div>
        </div>
    </Link>
  )
}
