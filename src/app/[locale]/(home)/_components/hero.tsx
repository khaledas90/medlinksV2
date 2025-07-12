"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Calendar,
  ShoppingCart,
  Home,
  Stethoscope,
  Heart,
  Shield,
  Clock,
  Star,
} from "lucide-react"
import Image  from "next/image"
import clsx from "clsx"
import { getActionVariant } from "@/lib/utils" 
import { SlideData } from "@/types/hero"
import doctors from "@/assets/doctors.jpg"
import hospitals from "@/assets/hospital.jpg"
import equipment from "@/assets/fully Equipped.png"
import Rental from "@/assets/medical-rental.png"
import { useTranslations } from "next-intl"


const slides: SlideData[] = [
  {
    id: 1,
    title: "Book Your Doctor Appointment", 
    description:
      "Connect with certified doctors and specialists Get professional medical consultation from the comfort of your home or visit our clinics",
    image: doctors  ,
    primaryAction: {
      text: "Book Doctor Now",
      icon: <Calendar className="w-5 h-5" />,
      variant: "doctor",
    },
    secondaryAction: {
      text: "View Specialists",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    badge: "24/7 Available",
    gradient: "from-[#3abff8] via-[#3abff8]/90 to-[#3abff8]/80",
  },
  {
    id: 2,
    title: "Premium Hospital Services", 
    description:
      "Access top-tier hospital services with state-of-the-art equipment, experienced medical staff, and comprehensive care packages",
    image: hospitals,
    primaryAction: {
      text: "Book Hospital",
      icon: <Home className="w-5 h-5" />,
      variant: "hospital",
    },
    secondaryAction: {
      text: "View Facilities",
      icon: <Shield className="w-5 h-5" />,
    },
    badge: "Emergency Ready" ,
    gradient: "from-[#ff9000] via-[#ff9000]/90 to-[#ff9000]/80",
  },
  {
    id: 3,
    title: "Fully Equipped Home ICU setups", 
    description:
      "At Medlinks, we bring hospital-grade intensive care directly into the homes of patients who require critical support without compromising comfort or safety Our fully equipped Home ICU setups are ideal for patients with chronic illnesses, post-operative recovery, or long-term ventilation needs",
    image: equipment,
    primaryAction: {
      text: "Shop Products",
      icon: <ShoppingCart className="w-5 h-5" />,
      variant: "product",
    },
    secondaryAction: {
      text: "View Catalog",
      icon: <Heart className="w-5 h-5" />,
    },
    badge: "Free Delivery" ,
    gradient: "from-[#3abff8] via-[#ff9000]/50 to-[#3abff8]/70",
  },
  {
    id: 4,
    title: "Medical Equipment Rental", 
    description:
      "Rent medical equipment and devices at affordable rates Perfect for temporary needs, recovery periods, or home healthcare",
    image: Rental,
    primaryAction: {
      text: "Rent Equipment",
      icon: <Clock className="w-5 h-5" />,
      variant: "rental",
    },
    secondaryAction: {
      text: "View Rentals",
      icon: <Star className="w-5 h-5" />,
    },
    badge: "Flexible Terms" ,
    gradient: "from-[#ff9000] via-[#3abff8]/50 to-[#ff9000]/70",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const t =   useTranslations('common.home');
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsAnimating(false)
    }, 300)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }



  const currentSlideData = slides[currentSlide]

  return (
<div className="relative min-h-screen h-auto overflow-hidden py-1.5 bg-gray-900 flex flex-col justify-between">
  <div
    className={clsx("absolute inset-0 bg-gradient-to-br transition-all duration-1000", currentSlideData.gradient)}
  />
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  </div>

  <div className="relative z-10 flex-1 flex items-center w-full px-6 lg:px-8">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center  min-h-[45vh]"> 
        <div
          className={clsx(
            "space-y-8 transition-all duration-700",
            isAnimating ? "opacity-0 translate-x-[-50px]" : "opacity-100 translate-x-0",
          )}
        > 
          <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
            {t(currentSlideData.badge)}
          </Badge>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">{t(currentSlideData.title)}</h1> 
          </div> 
          <p className="text-lg text-white/80 leading-relaxed max-w-xl">{t(currentSlideData.description)}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className={clsx(
                "text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl",
                getActionVariant(currentSlideData.primaryAction.variant),
              )}
            >
              {currentSlideData.primaryAction.icon}
              {t(currentSlideData.primaryAction.text)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
            >
              {currentSlideData.secondaryAction.icon}
              {t(currentSlideData.secondaryAction.text)}
            </Button>
          </div>
        </div>

        <div
          className={clsx(
            "relative flex justify-center items-center transition-all duration-700",
            isAnimating ? "opacity-0 translate-x-[50px]" : "opacity-100 translate-x-0",
          )}
        >
          <div className="relative flex justify-center items-center h-full">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 flex justify-center items-center">
              <Image
                src={currentSlideData.image || "/placeholder.svg"}
                alt={t(currentSlideData.title)}
                width={320}
                height={200}
                className="w-[500px] h-auto rounded-2xl shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
    <div className="flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
    
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsPlaying(!isPlaying)}
        className="text-white hover:bg-white/20 rounded-full p-2"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>

      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60",
            )}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="text-white hover:bg-white/20 rounded-full p-2"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="text-white hover:bg-white/20 rounded-full p-2"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
    <div
      className="h-full bg-[#3abff8] transition-all duration-100 ease-linear"
      style={{
        width: isPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : "0%",
      }}
    />
  </div>
</div>
  )
}
