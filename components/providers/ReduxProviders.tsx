import { Provider } from 'react-redux';
import React from 'react'
import { store } from 'store/store';

interface Props {
    children: any
}

export default function ReduxProviders({children}:Props) {
  return (
    <div>
        <Provider store={store}>{children}</Provider>
    </div>
  )
}
