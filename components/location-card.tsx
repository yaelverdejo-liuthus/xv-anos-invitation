import { MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LocationCardProps {
  title: string
  address: string
  time: string
  mapUrl: string
  icon?: "church" | "venue"
  imageUrl?: string
}

export function LocationCard({ title, address, time, mapUrl, icon = "venue", imageUrl }: LocationCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-[#B5B682] bg-gradient-to-br from-white to-[#FFF8E7] relative">
      {imageUrl && (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        </>
      )}

      <CardContent className="p-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className={`text-xl font-semibold ${imageUrl ? "text-white" : "text-[#8B8B5C]"}`}>{title}</h3>
            <p className={`text-sm leading-relaxed ${imageUrl ? "text-white/90" : "text-foreground/80"}`}>{address}</p>
            <div className={`flex items-center gap-2 ${imageUrl ? "text-white" : "text-[#B5B682]"}`}>
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{time}</span>
            </div>
            <Button
              asChild
              className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
