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

import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PolicyPage() {
  const t = useTranslations("common.policy");

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#3ABFF8] to-[#2DA5D8] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">
              {t("header.title")}
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t("header.subtitle")}
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 md:max-w-7xl w-full">
          <Card className="mb-8 border-l-4 border-l-[#3ABFF8]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-[#3ABFF8]" />
                {t("introduction.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p className="mb-4">{t("introduction.content")}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✓ {t("introduction.guarantee")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-l-4 border-l-[#3ABFF8]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-[#3ABFF8]" />
                {t("introduction.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p className="mb-4">{t("introduction.content")}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✓ {t("introduction.guarantee")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lock className="h-6 w-6 text-green-500" />
                {t("security.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {t("security.payment.title")}
                  </h4>
                  <p className="text-blue-800 text-sm">
                    {t("security.payment.content")}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    {t("security.dataPrivacy.title")}
                  </h4>
                  <p className="text-purple-800 text-sm">
                    {t("security.dataPrivacy.content")}
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>{t("security.dataPrivacy.content")}:</strong>{" "}
                  {t("security.dataPrivacy.content")}
                </p>
              </div>
              <p className="text-gray-700">{t("security.thirdParty")}</p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Eye className="h-6 w-6 text-orange-500" />
                {t("disclaimer.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p className="mb-4">{t("disclaimer.content")}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {t("definitions.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className={`border-l-4 border-l-[#3ABFF8] pl-4`}>
                  <h4 className="font-semibold text-gray-900">
                    {t("definitions.items.item-1")}:
                  </h4>
                  <p className="text-gray-700">
                    {t("definitions.items.item-1-def")}
                  </p>
                </div>

                <div className={`border-l-4 border-l-green-500 pl-4`}>
                  <h4 className="font-semibold text-gray-900">
                    {t("definitions.items.item-2")}:
                  </h4>
                  <p className="text-gray-700">
                    {t("definitions.items.item-2-def")}
                  </p>
                </div>

                <div className={`border-l-4 border-l-blue-500 pl-4`}>
                  <h4 className="font-semibold text-gray-900">
                    {t("definitions.items.item-3")}:
                  </h4>
                  <p className="text-gray-700">
                    {t("definitions.items.item-3-def")}
                  </p>
                </div>

                <div className={`border-l-4 border-l-purple-500 pl-4`}>
                  <h4 className="font-semibold text-gray-900">
                    {t("definitions.items.item-4")}:
                  </h4>
                  <p className="text-gray-700">
                    {t("definitions.items.item-4-def")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {t("detailedPolicies.title")}
              </CardTitle>
              <CardDescription>
                {t("detailedPolicies.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="information-collection"  >
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.informationCollection.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.informationCollection.content")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="use-of-information">
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.useOfInformation.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.useOfInformation.content")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="disclosure-of-information">
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.disclosureOfInformation.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.disclosureOfInformation.content")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy-security">
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.privacySecurity.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.privacySecurity.content")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cookies">
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.cookies.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.cookies.content")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="age-consent">
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.ageConsent.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.ageConsent.content")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="policy-changes">
                  <AccordionTrigger className="text-left no-underline cursor-pointer">
                    {t("detailedPolicies.policyChanges.title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-3">
                    {t("detailedPolicies.policyChanges.content")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

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
                        {t("contact.email.label")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.email.value")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#3ABFF8]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.phone.label")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.phone.value")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#3ABFF8] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.address.label")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.address.value")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#3ABFF8]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("contact.website.label")}
                      </p>
                      <Link
                        href={t("contact.website.value")}
                        className="text-gray-600"
                      >
                        {t("contact.website.value")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
