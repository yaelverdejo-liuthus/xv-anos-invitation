"use client"

import { useState, useRef, useEffect } from "react"
import { Music, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element with a relaxing instrumental track
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-50 rounded-full w-12 h-12 bg-[#D4AF37] hover:bg-[#B8941F] border-2 border-[#B5B682] shadow-lg"
      aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
    >
      {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Music className="h-5 w-5 text-white" />}
    </Button>
  )
}
