"use client"

import { useEffect, useRef } from "react"
import autoAnimate from "@formkit/auto-animate"

export function AnimatedWrapper({ children }: { children: React.ReactNode }) {
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return <div ref={parent}>{children}</div>
}
