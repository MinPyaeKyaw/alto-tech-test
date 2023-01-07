import Image from 'next/image'
import React from 'react'

// utils
import { langConvertor } from 'utils/functions'
import { languages } from 'utils/languages'
import { SERVICES } from 'utils/enums'

// redux
import { useAppSelector } from 'hooks/hooks';
import { selectLanguage } from 'features/languageSlice'
import OnScrollAnimator from '@/components/common/OnScrollAnimator/OnScrollAnimator'

export default function Services() {

  const language = useAppSelector(selectLanguage);

  return (
    <div className='service_container'>
        <div className='service_title'>{langConvertor(languages.welcomeTo, language)} Alto Hotel</div>

        <div className='service_listContainer'>
            {SERVICES.map(service => {
                return(
                    <OnScrollAnimator key={service.id}>
                        <div className='service_list'>
                            <div className='service_imgContainer'>
                                <Image
                                className='service_img'
                                alt="GOYA"
                                priority={true}
                                layout="fill"
                                objectFit="cover"
                                src={service.img}
                                />
                                <div className='service_nameDesk'>{langConvertor(service.name, language)}</div>
                            </div>
                            <div className='service_nameMobile'>{langConvertor(service.name, language)}</div>
                        </div>
                    </OnScrollAnimator>
                )
            })}
        </div>
    </div>
  )
}