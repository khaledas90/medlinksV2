"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Phone, CheckCircle } from "lucide-react";
import { Product } from "@/actions/product";
import { getCookie } from "cookies-next/client";
import { useAddOrderMutation } from "@/store/api/global/order";
import { toast } from "sonner";

interface OrderFormProps {
  product: Product;
}

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(1, "Please select a city"),
  quantity: z.string().min(1, "Quantity is required"),
  note: z.string().optional(),
  date: z.string().optional(),
  duty_time: z.string().optional(),
});

const CITIES = [
  { value: "abu_dhabi", label: "abu_dhabi" },
  { value: "dubai", label: "dubai" },
  { value: "sharjah", label: "sharjah" },
  { value: "ajman", label: "ajman" },
  { value: "umm_al_quwain", label: "umm_al_quwain" },
  { value: "ras_al_khaimah", label: "ras_al_khaimah" },
  { value: "fujairah", label: "fujairah" },
];

const DUTY_TIMES = [
  { value: "morning", label: "Morning (9AM - 12PM)" },
  { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
  { value: "evening", label: "Evening (5PM - 8PM)" },
];

const QUANTITIES = Array.from({ length: 10 }, (_, i) => ({
  value: (i + 1).toString(),
  label: (i + 1).toString(),
}));

export default function OrderForm({ product }: OrderFormProps) {
  const [addOrder, { isLoading, isSuccess }] = useAddOrderMutation();
  const [orderId, setOrderId] = useState("");
  const qrCode = getCookie("qr");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      quantity: "1",
      note: "",
      date: "",
      duty_time: "",
    },
  });

  const handleFormSubmit = async (data: z.infer<typeof schema>) => {
    const payload = {
      name: data.name,
      email: data.email || "",
      phone: data.phone,
      address: data.address,
      city: data.city,
      qr: qrCode || null,
      note: data.note || "",
      rent: product.categoryTypeId === 3,
      country: "UAE",
      deliverDate: product.categoryTypeId === 3 ? data.date || null : null,
      DeliveryDuty:
        product.categoryTypeId === 3 ? data.duty_time || null : null,
      items: [
        {
          quantity: data.quantity || 1,
          productId: product.id,
          productName: product.name,
          price:
            product.categoryTypeId === 3 ? product.rent || 0 : product.price,
        },
      ],
    };
    await addOrder(payload)
      .unwrap()
      .then((order) => {
        setOrderId(order.id);
        setTimeout(() => {
          form.reset();
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.massage || " Order submission error");
        console.error("Order submission error:", error);
      });
  };

  const currentPrice =
    product.categoryTypeId === 3 ? product.rent || 0 : product.price;
  const totalPrice = currentPrice * parseInt(form.watch("quantity") || "1");

  if (isSuccess) {
    return (
      <Card className={`border-2 border-green-200 bg-green-50 `}>
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
            Order ID: #{orderId}
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50`}
    >
      <CardHeader className="text-center bg-gradient-to-r from-[#FF8C00] to-[#E67E00] text-white rounded-t-lg">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl">
          {product.categoryTypeId === 3 ? "Rent Now" : "Order Now"}
        </CardTitle>
        <CardDescription className="text-white/90">
          Fill out the form below and we'll contact you to confirm your{" "}
          {product.categoryTypeId === 3 ? "rental" : "order"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              Product Details
            </h4>
            <p className="text-gray-700 text-sm mb-1">{product.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-[#FF8C00] font-bold">
                AED {currentPrice.toLocaleString()}{" "}
                {product.categoryTypeId === 3 ? "/day" : ""}
              </p>
              <p className="text-gray-600 text-sm">
                Total: AED {totalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input {...form.register("name")} placeholder="Full Name *" />
            <Input {...form.register("phone")} placeholder="Mobile Number *" />
            <Input {...form.register("email")} placeholder="Email Address" />
            <Select onValueChange={(v) => form.setValue("city", v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {CITIES.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="col-span-2">
              <Select onValueChange={(v) => form.setValue("quantity", v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Quantity" />
                </SelectTrigger>
                <SelectContent>
                  {QUANTITIES.map((q) => (
                    <SelectItem key={q.value} value={q.value}>
                      {q.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {product.categoryTypeId === 3 && (
              <Input type="date" {...form.register("date")} />
            )}

            {product.categoryTypeId === 3 && (
              <Select onValueChange={(v) => form.setValue("duty_time", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Preferred Time" />
                </SelectTrigger>
                <SelectContent>
                  {DUTY_TIMES.map((d) => (
                    <SelectItem key={d.value} value={d.value}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <Textarea
              {...form.register("address")}
              placeholder="Delivery Address *"
              className="md:col-span-2"
            />
            <Textarea
              {...form.register("note")}
              placeholder="Additional Notes"
              className="md:col-span-2"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3"
          >
            {isLoading ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
