import React from 'react'
import { IconInterface } from 'utils/interfaces'

export default function Booking({size, color}:IconInterface) {
  return (
    <svg width={size} height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 7.5V18C1.5 18.5523 1.94772 19 2.5 19H17.5C18.0523 19 18.5 18.5523 18.5 18V7.5M1.5 7.5V4C1.5 3.44772 1.94772 3 2.5 3H5.5M1.5 7.5H18.5M18.5 7.5V4C18.5 3.44772 18.0523 3 17.5 3H14.5M5.5 3V1.5M5.5 3H14.5M5.5 3V3.75M14.5 3V1.5M14.5 3V3.75" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
