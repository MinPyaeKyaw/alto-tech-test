import React from 'react'
import { IconInterface } from 'utils/interfaces'

export default function Home({size, color}:IconInterface) {
  return (
      <svg width={size} height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 19.5V10.3646C17 10.1288 16.9167 9.9007 16.7649 9.7204L9.7649 1.40828C9.36533 0.933812 8.63467 0.933811 8.2351 1.40827L1.2351 9.7204C1.08327 9.9007 1 10.1288 1 10.3646V19.5H6.5V12.5L11.5 12.5V19.5L17 19.5Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}
