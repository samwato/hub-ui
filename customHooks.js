import React from 'react'

export const useClickAwayEffect = (ref, callback) => {
  React.useEffect(() => {
    const clickAway = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', clickAway)
    document.addEventListener('focus', clickAway, true)
    return () => {
      document.removeEventListener('mousedown', clickAway)
      document.removeEventListener('focus', clickAway, true)
    }
  }, [ref, callback])
}
