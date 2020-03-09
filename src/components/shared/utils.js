import React, { useEffect, useState } from 'react';

export const useIsDesktop = (minWidth) => {
  const isBrowser = typeof window !== 'undefined'
  minWidth = minWidth || 800
  const [isDesktop, setIsDesktop] = useState(isBrowser ? window.innerWidth >= minWidth : false)

  useEffect(() => {
    if (!isBrowser) return false

    const handleResize = () => setIsDesktop(window.innerWidth >= minWidth)
    window.addEventListener('resize', handleResize)

    console.log('isdesktop: ', isDesktop)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return isDesktop
}