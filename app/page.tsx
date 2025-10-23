import { CountdownTimer } from "@/components/countdown-timer"
import { LocationCard } from "@/components/location-card"
import { MusicPlayer } from "@/components/music-player"
import { CursorTrail } from "@/components/cursor-trail"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Gift, Sparkles } from "lucide-react"

export default function Home() {
  const whatsappMessage = encodeURIComponent("¡Hola! Confirmo mi asistencia a los XV años de Jimena. 🎉")
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5212294636766&text=" + encodeURIComponent("¡Hola! Confirmo mi asistencia a los XV años de Jimena.")
  // Google Calendar event (all-day)
  const eventTitle = "XV a\u00f1os de Jimena."
  const startDate = "20251205"
  const endDate = "20251206"
  const details = "Ceremonia 6:00 p.m. en Parroquia Nuestra Se\u00f1ora del Rosario, recepci\u00f3n 8:00 p.m. en Sal\u00f3n y Jard\u00edn de Eventos Sunrise."
  const ctz = "America/Mexico_City"
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(eventTitle) +
    "&dates=" + startDate + "/" + endDate +
    "&details=" + encodeURIComponent(details) +
    "&ctz=" + encodeURIComponent(ctz)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8E7] via-white to-[#FFF8E7] relative overflow-hidden">
      <CursorTrail />

      {/* Top Left Corner Ornament */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0 0 Q 50 0 50 50 Q 50 100 100 100" stroke="#B5B682" strokeWidth="2" fill="none" />
          <path d="M 0 20 Q 40 20 40 60 Q 40 90 80 90" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="8" fill="#D4AF37" opacity="0.6" />
          <circle cx="50" cy="50" r="5" fill="#B5B682" opacity="0.6" />
          <circle cx="80" cy="90" r="4" fill="#D4AF37" opacity="0.6" />
        </svg>
      </div>

      {/* Top Right Corner Ornament */}
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30 scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0 0 Q 50 0 50 50 Q 50 100 100 100" stroke="#B5B682" strokeWidth="2" fill="none" />
          <path d="M 0 20 Q 40 20 40 60 Q 40 90 80 90" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="8" fill="#D4AF37" opacity="0.6" />
          <circle cx="50" cy="50" r="5" fill="#B5B682" opacity="0.6" />
          <circle cx="80" cy="90" r="4" fill="#D4AF37" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom Left Corner Ornament */}
      <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none opacity-30 scale-y-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0 0 Q 50 0 50 50 Q 50 100 100 100" stroke="#B5B682" strokeWidth="2" fill="none" />
          <path d="M 0 20 Q 40 20 40 60 Q 40 90 80 90" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="8" fill="#D4AF37" opacity="0.6" />
          <circle cx="50" cy="50" r="5" fill="#B5B682" opacity="0.6" />
          <circle cx="80" cy="90" r="4" fill="#D4AF37" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom Right Corner Ornament */}
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-30 scale-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0 0 Q 50 0 50 50 Q 50 100 100 100" stroke="#B5B682" strokeWidth="2" fill="none" />
          <path d="M 0 20 Q 40 20 40 60 Q 40 90 80 90" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="8" fill="#D4AF37" opacity="0.6" />
          <circle cx="50" cy="50" r="5" fill="#B5B682" opacity="0.6" />
          <circle cx="80" cy="90" r="4" fill="#D4AF37" opacity="0.6" />
        </svg>
      </div>

      {/* Decorative Side Borders */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #B5B682 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative inline-block">
            <h1 className="font-[family-name:var(--font-cursive)] text-6xl md:text-8xl text-[#B5B682] drop-shadow-lg">
              Mis X
              <span className="relative inline-block">
                <Crown className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 w-7 h-7 md:w-10 md:h-10 text-[#D4AF37] drop-shadow-lg z-10" />
                V
              </span>{" "}
              Años
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-[#B5B682] via-[#D4AF37] to-[#B5B682] mx-auto rounded-full" />
          <p className="text-4xl md:text-5xl font-[family-name:var(--font-cursive)] text-[#D4AF37]">Jimena</p>
        </div>
      </section>

      {/* Invitation Message */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-[#D4AF37] bg-white/80 backdrop-blur">
            <CardContent className="p-8 text-center space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Con la bendición de Dios y el amor de mi familia, tengo el honor de invitarte a celebrar conmigo este
                momento tan especial. Tu presencia hará que este día sea aún más memorable.
              </p>
              <p className="text-2xl font-[family-name:var(--font-cursive)] text-[#B5B682] mt-6">
                ¡Acompáñame en esta celebración!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors and Parents */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cursive)] text-[#B5B682]">
              Mis Padres y Mis Padrinos
            </h3>
          </div>
          <div className="space-y-4 hidden">
            <div className="flex items-center gap-3 order-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Madrina</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Virginia Arano Rosales</span>
            </div>
            <div className="flex items-center gap-3 order-4">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Padrino</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Saúl Vargas Felipe</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Mamá</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Manuela Espinosa Carrion</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Papá</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Rafael Artíguez Carballo</span>
            </div>
          </div>

          <div className="space-y-4 hidden">
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi MamA�</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Manuela Espinosa Carrion</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi PapA�</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Rafael ArtA-guez Carballo</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Madrina</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Virginia Arano Rosales</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Padrino</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">SaA�l Vargas Felipe</span>
            </div>
          </div>

        </div>
      </section>

      {/* Sponsors and Parents (UTF-8 corrected) */}
      <section className="py-12 px-4 hidden">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cursive)] text-[#B5B682]">
              Mis Padres y Mis Padrinos
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Mam&aacute;</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Manuela Espinosa Carrion</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Pap&aacute;</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Rafael Art&iacute;guez Carballo</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Madrina</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Virginia Arano Rosales</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wide text-[#8B8B5C] whitespace-nowrap">Mi Padrino</span>
              <div className="flex-1 border-t border-dashed border-[#D4AF37]/60" />
              <span className="text-lg font-medium bg-gradient-to-r from-[#B5B682] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">Sa&uacute;l Vargas Felipe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cursive)] text-center text-[#D4AF37]">
            Faltan...
          </h2>
          <CountdownTimer />
          <p className="text-center text-lg text-[#8B8B5C] font-medium">5 de Diciembre, 2025</p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cursive)] text-center text-[#B5B682]">
            Dónde y Cuándo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <LocationCard
              title="Ceremonia Religiosa"
              address="Parroquia Nuestra Señora del Rosario"
              time="6:00 p.m."
              mapUrl="https://maps.app.goo.gl/f9zXDYrT17bvsztE7?g_st=aw"
              icon="church"
              imageUrl="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq16zxWZMvTAf1TUcLX5cDEZozCIMnGFrt2wiGZN4ghVLdv-qnr1EjXe9IpINZ6cQ8274n6S9z3VEhF2PuqTpWIcBaQRSB6bypkzkJGJBAVRfWMF5nGexr0RVjJUiv0dx9Ue_LhHw=w408-h422-k-no"
            />

            <LocationCard
              title="Recepción"
              address="Salón y Jardín de Eventos Sunrise"
              time="8:00 p.m."
              mapUrl="https://maps.app.goo.gl/XynhDBrfBg249FNdA?g_st=aw"
              icon="venue"
              imageUrl="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqrLYs7Rb53ZLihigWen3GJQpUGEPmaO463rpkmk_8xmx-c7DbmW4IygZvszR3-P-NTITYX4nbOI2XwSxe50eKAMWYII916g6kve7aDO_F80xbypzuaSWghIKA6gOhYdB2oWoBP3YAl8TQ=w408-h306-k-no"
            />
          </div>
        </div>
      </section>

      {/* Gift Registry & Dress Code */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-[#D4AF37] bg-gradient-to-br from-white to-[#FFF8E7]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#8B8B5C]">Mesa de Regalos</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Tu presencia es el mejor regalo, pero si deseas obsequiarme algo, te dejo esta sugerencia:
              </p>
              <div className="flex flex-col items-center pt-4 gap-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sobre-abierto.jpg-sovjDXEIoKWwpioWt4zmfjhAt49XlG.avif"
                  alt="Sobre abierto"
                  className="w-40 h-auto object-contain"
                />
                <p className="text-lg font-semibold text-[#D4AF37]">Lluvia de Sobres</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#D4AF37] bg-gradient-to-br from-white to-[#FFF8E7]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#8B8B5C]">Código de Vestimenta</h3>
              </div>
              <div className="flex flex-col items-center pt-4 gap-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vets-formal-zWZKy6tOKE6i1jBznxdGac7fQjhgo1.png"
                  alt="Traje formal"
                  className="w-64 h-auto object-contain"
                />
                <p className="text-lg font-semibold text-[#D4AF37]">Formal</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#FFF8E7] to-white">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cursive)] text-[#D4AF37]">
            Confirma tu Asistencia
          </h2>

          <Button
            asChild
            size="lg"
            className="hidden"
          >
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
              Guardar en calendario
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#B5B682] to-[#8B8B5C] hover:from-[#8B8B5C] hover:to-[#6B6B4C] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Confirmar por WhatsApp
            </a>
          </Button>

          <p className="text-lg text-[#B5B682] font-medium mt-4">¡Tu presencia es muy importante para nosotros!</p>
        </div>
        <div className="max-w-2xl mx-auto text-center mt-8 md:mt-10">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#8F6E15] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
              Guardar en calendario
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[#B5B682]/20">
        <p className="text-sm text-foreground/60">Con amor, Jimena y familia</p>
        <p className="text-xs text-foreground/40 mt-2">5 de Diciembre, 2025</p>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </main>
  )
}
