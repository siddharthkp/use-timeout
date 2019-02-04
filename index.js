import React, { useState, useEffect, useRef } from 'react'

function useTimeout(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )

  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setTimeout(tick, delay)
        return () => clearTimeout(id)
      }
    },
    [delay]
  )
}

export default useTimeout
