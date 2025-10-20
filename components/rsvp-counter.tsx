"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Users } from "lucide-react"

export function RsvpCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const supabase = createClient()

    // Get initial count
    const getCount = async () => {
      const { count } = await supabase.from("rsvps").select("*", { count: "exact", head: true })

      if (count !== null) {
        setCount(count)
      }
    }

    getCount()

    // Subscribe to real-time changes
    const channel = supabase
      .channel("rsvps-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "rsvps",
        },
        () => {
          getCount()
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <div className="flex items-center justify-center gap-2 text-[#B5B682]">
      <Users className="h-5 w-5" />
      <span className="text-sm font-medium">
        {count} {count === 1 ? "persona ha confirmado" : "personas han confirmado"}
      </span>
    </div>
  )
}
