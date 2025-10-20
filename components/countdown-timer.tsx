"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-12-05T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      <div className="flex flex-col items-center p-4 rounded-lg bg-[#B5B682]/10 border-2 border-[#B5B682]">
        <span className="text-4xl md:text-5xl font-bold text-[#B5B682]">{timeLeft.days}</span>
        <span className="text-sm md:text-base text-[#8B8B5C] mt-1">Días</span>
      </div>
      <div className="flex flex-col items-center p-4 rounded-lg bg-[#D4AF37]/10 border-2 border-[#D4AF37]">
        <span className="text-4xl md:text-5xl font-bold text-[#D4AF37]">{timeLeft.hours}</span>
        <span className="text-sm md:text-base text-[#B8941F] mt-1">Horas</span>
      </div>
      <div className="flex flex-col items-center p-4 rounded-lg bg-[#B5B682]/10 border-2 border-[#B5B682]">
        <span className="text-4xl md:text-5xl font-bold text-[#B5B682]">{timeLeft.minutes}</span>
        <span className="text-sm md:text-base text-[#8B8B5C] mt-1">Minutos</span>
      </div>
      <div className="flex flex-col items-center p-4 rounded-lg bg-[#D4AF37]/10 border-2 border-[#D4AF37]">
        <span className="text-4xl md:text-5xl font-bold text-[#D4AF37]">{timeLeft.seconds}</span>
        <span className="text-sm md:text-base text-[#B8941F] mt-1">Segundos</span>
      </div>
    </div>
  )
}
