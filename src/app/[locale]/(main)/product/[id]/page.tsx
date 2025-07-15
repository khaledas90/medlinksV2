import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Phone,
  Mail,
  MessageCircle,
  ShoppingCart,
  Heart,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// This would typically come from a database or API
const product = {
  id: 1,
  name: "Topson - auto cpap",
  price: "AED 2,735",
  rating: 5,
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  description:
    "CPAP (continuous positive airway pressure) is a machine that uses mild air pressure to keep breathing airways open while you sleep. Topson cpap is a type of positive airway pressure (PAP) ventilation. Topson cpap machine involves consistently applying pressure greater than atmospheric pressure to a person's upper respiratory tract. This aims to prevent upper airway collapse, common in obstructive sleep apnea, and ease breathing effort in conditions like acute decompensated heart failure. Indication of Usage: COPD, OSA, Acute bronchitis and pneumonia secondary to bacterial, viral, fungal causes or severely obese patients. Audience: The audience for Topson cpap machine are the patients with Pulmonologist, ENT, Internal Medicine and Neurologist Technical specifications: Compact, Light Weight & Ultra Portable (0.9Kg). User Friendly with Ergonomically Designed Rotary Dial for all inputs Therapy Data – AHI, Snoring Index, Usage Hours, P90, Leak, etc., can be easily viewed from the device itself from previous night sleep upto an year. Includes Easily Detachable Heated Humidifier. Warranty- 1 Year",
  category: "Sleep Therapy Equipment",
  availability: "Available",
  features: [
    "Compact and lightweight design (0.9Kg)",
    "User-friendly ergonomic rotary dial",
    "Comprehensive therapy data tracking",
    "Detachable heated humidifier included",
    "1-year warranty",
  ],
};

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images and Details */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-lg border-2 border-[#3ABFF8] p-4">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-white rounded-lg border p-2 cursor-pointer hover:border-[#3ABFF8]"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < product.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      ({product.rating}.0 rating)
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-[#3ABFF8] mb-4">
                    {product.price}
                  </div>
                  <Badge className="bg-green-100 text-green-800 mb-4">
                    {product.availability}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#3ABFF8] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 bg-transparent"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <Card className="mt-8 border-2 border-[#3ABFF8]">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-2 border-orange-200">
              <CardHeader className="text-center bg-orange-50">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Order Now
                </CardTitle>
                <CardDescription>
                  Please enter your details and we will reach out to you as soon
                  as we can
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input value={product.name} readOnly className="bg-gray-50" />
                </div>

                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="sharjah">Sharjah</SelectItem>
                      <SelectItem value="ajman">Ajman</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Input placeholder="Name" />
                </div>

                <div>
                  <Input placeholder="Email" type="email" />
                </div>

                <div>
                  <Input placeholder="Mobile No." type="tel" />
                </div>

                <div>
                  <Textarea placeholder="Address" className="min-h-[80px]" />
                </div>

                <div>
                  <Input placeholder="1" type="number" min="1" />
                </div>

                <div>
                  <Textarea placeholder="Note" className="min-h-[60px]" />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Send
                </Button>

                <div className="flex justify-center space-x-4 pt-4">
                  <Button variant="ghost" size="sm" className="text-[#FF8C00]">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
