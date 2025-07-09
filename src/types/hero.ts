import { StaticImageData } from "next/image"

export interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  image: string | StaticImageData
  primaryAction: {
    text: string
    icon: React.ReactNode
    variant: "doctor" | "hospital" | "product" | "rental"
  }
  secondaryAction: {
    text: string
    icon: React.ReactNode
  }
  badge: string
  stats: Array<{
    value: string
    label: string
  }>
  gradient: string
}