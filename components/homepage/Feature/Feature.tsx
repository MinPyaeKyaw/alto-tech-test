import React from 'react'

// utils
import { langConvertor } from 'utils/functions'
import { languages } from 'utils/languages'
import { FEATURES } from 'utils/enums'

// redux
import { useAppSelector } from 'hooks/hooks';
import { selectLanguage } from 'features/languageSlice'

// motion
import { motion } from 'framer-motion';
import OnScrollAnimator from '@/components/common/OnScrollAnimator/OnScrollAnimator';

export default function Feature() {

  const language = useAppSelector(selectLanguage);

  return (
    <div className='feature_container'>
        <div className='feature_title'>{langConvertor(languages.goodEvening, language)}Mr. Joe</div>

        <div className='feature_listContainer'>
            {FEATURES.map(feature => {
                return(
                    <OnScrollAnimator key={feature.id}>
                        <div className='feature_list'>
                            <div className='feature_icon'>
                                {feature.icon}
                            </div>
                            <div className='feature_text'>{langConvertor(feature.name, language)}</div>
                        </div>
                    </OnScrollAnimator>
                )
            })}
        </div>
    </div>
  )
}