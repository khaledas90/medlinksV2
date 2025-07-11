import { StaticImageData } from "next/image"

export interface SlideData {
  id: number
  title: string 
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
  gradient: string
}