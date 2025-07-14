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
  Scale,
  AlertTriangle,
  UserCheck,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function TermsAndConditionsPage() {
  const t = useTranslations("common.termsAndConditions");

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#3ABFF8] to-[#2DA5D8] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Scale className="h-12 w-12 text-white mr-4" />
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
          {/* Company Information */}
          <Card className="mb-8 border-l-4 border-l-[#3ABFF8]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-[#3ABFF8]" />
                {t("companyInformation.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  {t("companyInformation.legalEntityTitle")}
                </h4>
                <p className="text-blue-800">
                  <strong>{t("companyInformation.legalEntityContent")}</strong>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-900">
                      {t("companyInformation.countryOfDomicileTitle")}
                    </h4>
                  </div>
                  <p className="text-green-800">
                    {t("companyInformation.countryOfDomicileContent")}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-900">
                      {t("companyInformation.governingLawTitle")}
                    </h4>
                  </div>
                  <p className="text-purple-800">
                    {t("companyInformation.governingLawContent")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Jurisdiction */}
          <Card className="mb-8 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Scale className="h-6 w-6 text-red-500" />
                {t("legalJurisdiction.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>{t("legalJurisdiction.notice")}</strong>
                  {t("legalJurisdiction.content")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          {/* Payment Terms */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CreditCard className="h-6 w-6 text-green-500" />
                {t("paymentTerms.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    {t("paymentTerms.acceptedMethodsTitle")}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-4 w-4 text-green-600" />
                    <span className="text-green-800">
                      {t("paymentTerms.visa")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-green-600" />
                    <span className="text-green-800">
                      {t("paymentTerms.mastercard")}
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {t("paymentTerms.currencyTitle")}
                  </h4>
                  <p className="text-blue-800 text-sm">
                    {t("paymentTerms.currencyText")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trading Restrictions */}
          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="h-6 w-6 text-orange-500" />
                {t("tradingRestrictions.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="border-orange-200 bg-orange-50">
                <Shield className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>{t("tradingRestrictions.notice")}</strong>
                  {t("tradingRestrictions.content")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Detailed Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {t("detailedTermsAndConditions.title")}
              </CardTitle>
              <CardDescription>
                {t("detailedTermsAndConditions.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="age-restrictions">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-red-500" />
                      {t("detailedTermsAndConditions.ageRestrictions")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong className="mx-1">
                          {t("detailedTermsAndConditions.ageRequirements")}
                        </strong>
                        {t("detailedTermsAndConditions.ageRequirementsContent")}
                      </AlertDescription>
                    </Alert>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">
                        {t(
                          "detailedTermsAndConditions.Age Verification Requirements:"
                        )}
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>
                          {t(
                            "detailedTermsAndConditions.Users must be 18 years or older to create an account"
                          )}
                        </li>
                        <li>
                          {t(
                            "detailedTermsAndConditions.Age verification may be required for certain transactions"
                          )}
                        </li>
                        <li>
                          {t(
                            "detailedTermsAndConditions.Parental consent does not override this restriction"
                          )}
                        </li>
                        <li>
                          {t(
                            "detailedTermsAndConditions.We reserve the right to verify age at any time"
                          )}
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-responsibility">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-blue-500" />
                      {t(
                        "detailedTermsAndConditions.accountResponsibility.title"
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-gray-700">
                      {t(
                        "detailedTermsAndConditions.accountResponsibility.content"
                      )}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">
                          {t(
                            "detailedTermsAndConditions.accountResponsibility.yourResponsibilitiesTitle"
                          )}
                        </h5>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.yourResponsibility1"
                            )}
                          </li>
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.yourResponsibility2"
                            )}
                          </li>
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.yourResponsibility3"
                            )}
                          </li>
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.yourResponsibility4"
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-2">
                          {t(
                            "detailedTermsAndConditions.accountResponsibility.securityBestPracticesTitle"
                          )}
                        </h5>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.securityPractice1"
                            )}
                          </li>
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.securityPractice2"
                            )}
                          </li>
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.securityPractice3"
                            )}
                          </li>
                          <li>
                            •
                            {t(
                              "detailedTermsAndConditions.accountResponsibility.securityPractice4"
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* Transaction Records */}
                <AccordionItem value="transaction-records">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-500" />
                      {t("detailedTermsAndConditions.transactionRecords.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-gray-700">
                      {t(
                        "detailedTermsAndConditions.transactionRecords.content"
                      )}
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">
                        {t(
                          "detailedTermsAndConditions.transactionRecords.subTitle"
                        )}
                      </h5>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>
                          •{" "}
                          {t(
                            "detailedTermsAndConditions.transactionRecords.point1"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "detailedTermsAndConditions.transactionRecords.point2"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "detailedTermsAndConditions.transactionRecords.point3"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "detailedTermsAndConditions.transactionRecords.point4"
                          )}
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Website Usage Terms */}
                <AccordionItem value="website-usage">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-green-500" />
                      {t("detailedTermsAndConditions.websiteUsage.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-2">
                          {t(
                            "detailedTermsAndConditions.websiteUsage.permittedTitle"
                          )}
                        </h5>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.permitted1"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.permitted2"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.permitted3"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.permitted4"
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-2">
                          {t(
                            "detailedTermsAndConditions.websiteUsage.prohibitedTitle"
                          )}
                        </h5>
                        <ul className="text-red-800 text-sm space-y-1">
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.prohibited1"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.prohibited2"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.prohibited3"
                            )}
                          </li>
                          <li>
                            •{" "}
                            {t(
                              "detailedTermsAndConditions.websiteUsage.prohibited4"
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Liability and Limitations */}
                <AccordionItem value="liability-limitations">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-orange-500" />
                      {t(
                        "detailedTermsAndConditions.liabilityLimitations.title"
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <Alert className="border-orange-200 bg-orange-50">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <AlertDescription className="text-orange-800">
                        {t(
                          "detailedTermsAndConditions.liabilityLimitations.alert"
                        )}
                      </AlertDescription>
                    </Alert>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">
                        {t(
                          "detailedTermsAndConditions.liabilityLimitations.subTitle"
                        )}
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>
                          {t(
                            "detailedTermsAndConditions.liabilityLimitations.point1"
                          )}
                        </li>
                        <li>
                          {t(
                            "detailedTermsAndConditions.liabilityLimitations.point2"
                          )}
                        </li>
                        <li>
                          {t(
                            "detailedTermsAndConditions.liabilityLimitations.point3"
                          )}
                        </li>
                        <li>
                          {t(
                            "detailedTermsAndConditions.liabilityLimitations.point4"
                          )}
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Terms Modifications */}
                <AccordionItem value="modifications">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      {t("detailedTermsAndConditions.modifications.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-gray-700">
                      {t("detailedTermsAndConditions.modifications.content")}
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">
                        {t("detailedTermsAndConditions.modifications.subTitle")}
                      </h5>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>
                          •{" "}
                          {t("detailedTermsAndConditions.modifications.point1")}
                        </li>
                        <li>
                          •{" "}
                          {t("detailedTermsAndConditions.modifications.point2")}
                        </li>
                        <li>
                          •{" "}
                          {t("detailedTermsAndConditions.modifications.point3")}
                        </li>
                        <li>
                          •{" "}
                          {t("detailedTermsAndConditions.modifications.point4")}
                        </li>
                      </ul>
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
