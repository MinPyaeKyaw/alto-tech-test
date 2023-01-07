import React from 'react'
import { IconInterface } from 'utils/interfaces'

export default function Close({size, color}:IconInterface) {
  return (
    <svg width={size} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.34326 18.1567L17.657 6.84303" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.34326 6.84326L17.657 18.157" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
