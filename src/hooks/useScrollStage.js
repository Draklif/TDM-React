import { useState, useEffect } from 'react'

export function useScrollStage() {
  const [scroll, setScroll] = useState({
    progress: 0,  // 0 a 1 global
    stage: 0,     // 0, 1, o 2
    stageProgress: 0  // 0 a 1 dentro del stage actual
  })

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)

      let stage, stageProgress
      if (progress < 0.33) {
        stage = 0
        stageProgress = progress / 0.33
      } else if (progress < 0.66) {
        stage = 1
        stageProgress = (progress - 0.33) / 0.33
      } else {
        stage = 2
        stageProgress = (progress - 0.66) / 0.34
      }

      setScroll({ progress, stage, stageProgress })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scroll
}