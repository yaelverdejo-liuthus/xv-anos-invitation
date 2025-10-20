"use client"

import { useEffect } from "react"

export function CursorTrail() {
  useEffect(() => {
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("div")
      particle.className = "cursor-trail-particle"
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      document.body.appendChild(particle)

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove()
      }, 800)
    }

    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      // Get the first touch point
      const touch = e.touches[0]
      if (touch) {
        createParticle(touch.clientX, touch.clientY)
      }
    }

    // Throttle events for performance
    let lastTime = 0
    const throttleDelay = 30 // ms

    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime >= throttleDelay) {
        lastTime = now
        handleMouseMove(e)
      }
    }

    const throttledTouchMove = (e: TouchEvent) => {
      const now = Date.now()
      if (now - lastTime >= throttleDelay) {
        lastTime = now
        handleTouchMove(e)
      }
    }

    const isTouchDevice = "ontouchstart" in window

    if (isTouchDevice) {
      // Add touch event listeners for mobile
      document.addEventListener("touchmove", throttledTouchMove)
    } else {
      // Add mouse event listeners for desktop
      document.addEventListener("mousemove", throttledMouseMove)
    }

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove)
      document.removeEventListener("touchmove", throttledTouchMove)
    }
  }, [])

  return null
}
