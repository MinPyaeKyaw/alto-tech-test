import React from 'react'
import { IconInterface } from 'utils/interfaces'

export default function Burger({size, color}:IconInterface) {
  return (
    <svg width={size} height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 13.375H16.875M1.125 7.375H16.875M1.125 1.375H16.875" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
