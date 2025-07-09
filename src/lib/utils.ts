import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return format(new Date(date), "yyyy년 MM월 dd일 HH:mm");
}


 export const getActionVariant = (variant: string) => {
    switch (variant) {
      case "doctor":
        return "bg-[#3abff8] hover:bg-[#3abff8]/90"
      case "hospital":
        return "bg-[#ff9000] hover:bg-[#ff9000]/90"
      case "product":
        return "bg-[#3abff8] hover:bg-[#3abff8]/90"
      case "rental":
        return "bg-[#ff9000] hover:bg-[#ff9000]/90"
      default:
        return "bg-[#3abff8] hover:bg-[#3abff8]/90"
    }
  }