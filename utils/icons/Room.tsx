import React from 'react'
import { IconInterface } from 'utils/interfaces'

export default function Room({size, color}:IconInterface) {
  return (
      <svg width={size} height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33301 8C5.33301 7.46957 5.54372 6.96086 5.91879 6.58579C6.29387 6.21071 6.80258 6 7.33301 6H24.6663C25.1968 6 25.7055 6.21071 26.0806 6.58579C26.4556 6.96086 26.6663 7.46957 26.6663 8V15.3333H5.33301V8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 23.3333V25.9999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 23.3333V25.9999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.333 12H9.33301C8.80257 12 8.29387 12.2107 7.91879 12.5858C7.54372 12.9609 7.33301 13.4696 7.33301 14V15.3333H15.333V14C15.333 13.4696 15.1223 12.9609 14.7472 12.5858C14.3721 12.2107 13.8634 12 13.333 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.6665 12H18.6665C18.1361 12 17.6274 12.2107 17.2523 12.5858C16.8772 12.9609 16.6665 13.4696 16.6665 14V15.3333H24.6665V14C24.6665 13.4696 24.4558 12.9609 24.0807 12.5858C23.7056 12.2107 23.1969 12 22.6665 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.6665 17.3333C2.6665 16.8028 2.87722 16.2941 3.25229 15.919C3.62736 15.544 4.13607 15.3333 4.6665 15.3333H27.3332C27.8636 15.3333 28.3723 15.544 28.7474 15.919C29.1225 16.2941 29.3332 16.8028 29.3332 17.3333V23.3333H2.6665V17.3333Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

  )
}
