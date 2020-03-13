import { useEffect, useState, useRef } from 'react';

export const useIsDesktop = (minWidth) => {
  const isBrowser = typeof window !== 'undefined'
  minWidth = minWidth || 800
  const [isDesktop, setIsDesktop] = useState(isBrowser ? window.innerWidth >= minWidth : false)

  useEffect(() => {
    if (!isBrowser) return false

    const handleResize = () => setIsDesktop(window.innerWidth >= minWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return isDesktop
}

export const useObserver = ({onIntersect, target, root, rootMargin = '0px', threshold = 0, triggerOnce = false}) => {

  const triggered = useRef(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  if(typeof root !== "undefined") root = root.current || root;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer)=>{
      setIsIntersecting(false);

      if(entry.isIntersecting) {
        if(onIntersect) {
          onIntersect(entry, observer)
          triggered.current = true;
          setIsIntersecting(true);
        }
        if(triggerOnce && triggered.current) {
          observer.disconnect()
        }
      }},
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(target.current)

    return () => {
      if(observer) observer.disconnect()
    }
  }, [target, root, rootMargin, threshold])

  return [isIntersecting]
}