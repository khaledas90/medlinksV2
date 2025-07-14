import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  RotateCcw,
  CreditCard,
  Truck,
  Clock,
  XCircle,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Package,
  RefreshCw,
  Calendar,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function ReturnPolicyPage() {
  const t = useTranslations("common.termsAndConditions");
  const c = useTranslations("common.returnPolicy");
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#3ABFF8] to-[#2DA5D8] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <RotateCcw className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">{c("hero.title")}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {c("hero.description")}
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:max-w-7xl w-full">
          {/* Return Eligibility */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-500" />
                {c("eligibility.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">
                    {c("eligibility.returnWindowTitle")}
                  </h4>
                </div>
                <p className="text-green-800 mb-3">
                  {c("eligibility.returnWindowDescription")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-blue-900 mb-1">
                    {c("eligibility.originalPackagingTitle")}
                  </h5>
                  <p className="text-blue-800 text-sm">
                    {c("eligibility.originalPackagingDesc")}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <RefreshCw className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-purple-900 mb-1">
                    {c("eligibility.unusedConditionTitle")}
                  </h5>
                  <p className="text-purple-800 text-sm">
                    {c("eligibility.unusedConditionDesc")}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-orange-900 mb-1">
                    {c("eligibility.sameConditionTitle")}
                  </h5>
                  <p className="text-orange-800 text-sm">
                    {c("eligibility.sameConditionDesc")}
                  </p>
                </div>
              </div>

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  {c("eligibility.alert")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="mb-8 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <XCircle className="h-6 w-6 text-red-500" />
                {c("nonReturnable.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3">
                    {c("nonReturnable.excludedTitle")}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-red-800">
                      <XCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.giftCards")}</span>
                    </li>
                    <li className="flex items-center gap-2 text-red-800">
                      <XCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.customMade")}</span>
                    </li>
                    <li className="flex items-center gap-2 text-red-800">
                      <XCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.compression")}</span>
                    </li>
                    <li className="flex items-center gap-2 text-red-800">
                      <XCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.incontinence")}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-3">
                    {c("nonReturnable.hygieneTitle")}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-orange-800">
                      <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.intimate")}</span>
                    </li>
                    <li className="flex items-center gap-2 text-orange-800">
                      <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.hazardous")}</span>
                    </li>
                    <li className="flex items-center gap-2 text-orange-800">
                      <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.flammable")}</span>
                    </li>
                    <li className="flex items-center gap-2 text-orange-800">
                      <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                      <span>{c("nonReturnable.personalCare")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Policies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {c("title")}
              </CardTitle>
              <CardDescription>{c("description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {/* Partial Refunds */}
                <AccordionItem value="partial-refunds">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-orange-500" />
                      {c("partialRefunds.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-gray-700">{c("partialRefunds.desc")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-900 mb-2">
                          {c("partialRefunds.conditionTitle")}
                        </h5>
                        <p className="text-orange-800 text-sm">
                          {c("partialRefunds.conditionDesc")}
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-2">
                          {c("partialRefunds.lateTitle")}
                        </h5>
                        <p className="text-red-800 text-sm">
                          {c("partialRefunds.lateDesc")}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Delivery Policy */}
                <AccordionItem value="delivery-policy">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-blue-500" />
                      {c("delivery.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">
                          {c("delivery.uaeTitle")}
                        </h5>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>{c("delivery.uae1")}</li>
                          <li>{c("delivery.uae2")}</li>
                          <li>{c("delivery.uae3")}</li>
                          <li>{c("delivery.uae4")}</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-2">
                          {c("delivery.intlTitle")}
                        </h5>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>{c("delivery.intl1")}</li>
                          <li>{c("delivery.intl2")}</li>
                          <li>{c("delivery.intl3")}</li>
                          <li>{c("delivery.intl4")}</li>
                        </ul>
                      </div>
                    </div>
                    <Alert className="border-blue-200 bg-blue-50">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        {c("delivery.alert")}
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                {/* Refund Processing */}
                <AccordionItem value="refund-policy">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-green-500" />
                      {c("refund.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h5 className="font-semibold text-green-900 mb-2">
                        {c("refund.methodTitle")}
                      </h5>
                      <p className="text-green-800 mb-2">
                        {c("refund.methodDesc")}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">
                          {c("refund.confirmTitle")}
                        </h5>
                        <p className="text-blue-800 text-sm">
                          {c("refund.confirmDesc")}
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-900 mb-2">
                          {c("refund.processingTitle")}
                        </h5>
                        <p className="text-purple-800 text-sm">
                          {c("refund.processingDesc")}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Return Process */}
                <AccordionItem value="return-process">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-5 w-5 text-purple-500" />
                      {c("returnProcess.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-900 mb-2">
                        {c("returnProcess.requirementsTitle")}
                      </h5>
                      <p className="text-purple-800 mb-3">
                        {c("returnProcess.requirementsDesc")}
                      </p>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>{c("returnProcess.r1")}</li>
                        <li>{c("returnProcess.r2")}</li>
                        <li>{c("returnProcess.r3")}</li>
                        <li>{c("returnProcess.r4")}</li>
                      </ul>
                    </div>
                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        {c("returnProcess.alert")}
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                {/* Cancellation Policy */}
                <AccordionItem value="cancellation-policy">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" />
                      {c("cancel.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-900 mb-2">
                        {c("cancel.windowTitle")}
                      </h5>
                      <p className="text-red-800 text-sm mb-2">
                        {c("cancel.desc1")}
                      </p>
                      <p className="text-red-800 text-sm">
                        {c("cancel.desc2")}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Missing Refunds */}
                <AccordionItem value="missing-refunds">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      {c("missing.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-gray-700">{c("missing.desc")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-900 mb-2">
                          {c("missing.stepsTitle")}
                        </h5>
                        <ol className="text-orange-800 text-sm space-y-1 list-decimal list-inside">
                          <li>{c("missing.step1")}</li>
                          <li>{c("missing.step2")}</li>
                          <li>{c("missing.step3")}</li>
                          <li>{c("missing.step4")}</li>
                        </ol>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">
                          {c("missing.processingTitle")}
                        </h5>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>{c("missing.proc1")}</li>
                          <li>{c("missing.proc2")}</li>
                          <li>{c("missing.proc3")}</li>
                          <li>{c("missing.proc4")}</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Exchanges */}
                <AccordionItem value="exchanges">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-green-500" />
                      {c("exchange.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">
                        {c("exchange.policyTitle")}
                      </h5>
                      <p className="text-green-800 text-sm mb-2">
                        {c("exchange.desc1")}
                      </p>
                      <p className="text-green-800 text-sm">
                        {c("exchange.desc2")}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Shipping for Returns */}
                <AccordionItem value="return-shipping">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-blue-500" />
                      {c("shipping.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">
                          {c("shipping.returnTitle")}
                        </h5>
                        <p className="text-blue-800 text-sm">
                          {c("shipping.returnDesc")}
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-900 mb-2">
                          {c("shipping.costTitle")}
                        </h5>
                        <ul className="text-orange-800 text-sm space-y-1">
                          <li>{c("shipping.cost1")}</li>
                          <li>{c("shipping.cost2")}</li>
                          <li>{c("shipping.cost3")}</li>
                          <li>{c("shipping.cost4")}</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-l-4 border-l-[#FF8C00]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="h-6 w-6 text-[#FF8C00]" />
                {t("contact.title")}
              </CardTitle>
              <CardDescription>{t("contact.description")}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#3ABFF8]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.emailTitle")}
                      </p>
                      <p className="text-gray-600">{t("contact.emailValue")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#3ABFF8]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.phoneTitle")}
                      </p>
                      <p className="text-gray-600">{t("contact.phoneValue")}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#3ABFF8] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.addressTitle")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.addressValue")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#3ABFF8]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.websiteTitle")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.websiteValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#3ABFF8]/10 to-[#FF8C00]/10 rounded-lg border border-[#3ABFF8]/20">
                <p className="text-center text-gray-700">
                  <strong>{t("contact.businessHours").split(":")[0]}:</strong>
                  {t("contact.businessHours")
                    .split(":")
                    .slice(1)
                    .join(":")
                    .trim()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
