"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

interface OrderFormProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
  className?: string;
}

export default function OrderForm({ product, className = "" }: OrderFormProps) {
  const [formData, setFormData] = useState({
    city: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
    quantity: "1",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        city: "",
        name: "",
        email: "",
        mobile: "",
        address: "",
        quantity: "1",
        note: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className={`border-2 border-green-200 bg-green-50 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Order Submitted Successfully!
          </h3>
          <p className="text-green-800 mb-4">
            Thank you for your interest. We'll contact you within 24 hours to
            confirm your order.
          </p>
          <Badge className="bg-green-600 text-white">
            Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 ${className}`}
    >
      <CardHeader className="text-center bg-gradient-to-r from-[#FF8C00] to-[#E67E00] text-white rounded-t-lg">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl">Order Now</CardTitle>
        <CardDescription className="text-white/90">
          Fill out the form below and we'll contact you to confirm your order
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Info */}
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              Product Details
            </h4>
            <p className="text-gray-700 text-sm mb-1">{product.name}</p>
            <p className="text-[#FF8C00] font-bold">
              AED {product.price.toLocaleString()}
            </p>
          </div>

          {/* City Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="h-4 w-4 inline mr-1" />
              Select City *
            </label>
            <Select
              value={formData.city}
              onValueChange={(value) => handleInputChange("city", value)}
            >
              <SelectTrigger className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                <SelectValue placeholder="Choose your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                <SelectItem value="sharjah">Sharjah</SelectItem>
                <SelectItem value="ajman">Ajman</SelectItem>
                <SelectItem value="ras-al-khaimah">Ras Al Khaimah</SelectItem>
                <SelectItem value="fujairah">Fujairah</SelectItem>
                <SelectItem value="umm-al-quwain">Umm Al Quwain</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <Input
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                placeholder="+971 XX XXX XXXX"
                type="tel"
                className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              type="email"
              className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address *
            </label>
            <Textarea
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your complete delivery address"
              className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00] min-h-[80px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <Select
              value={formData.quantity}
              onValueChange={(value) => handleInputChange("quantity", value)}
            >
              <SelectTrigger className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <Textarea
              value={formData.note}
              onChange={(e) => handleInputChange("note", e.target.value)}
              placeholder="Any special requirements or notes..."
              className="border-orange-200 focus:border-[#FF8C00] focus:ring-[#FF8C00] min-h-[60px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              "Submit Order Request"
            )}
          </Button>

          {/* Contact Options */}
          <div className="border-t border-orange-200 pt-4">
            <p className="text-center text-sm text-gray-600 mb-3">
              Or contact us directly:
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#FF8C00] hover:bg-[#FF8C00]/10"
              >
                <Phone className="h-4 w-4 mr-1" />
                Call
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-green-600 hover:bg-green-100"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:bg-blue-100"
              >
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-2 text-blue-800">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">
                We'll respond within 24 hours
              </span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
