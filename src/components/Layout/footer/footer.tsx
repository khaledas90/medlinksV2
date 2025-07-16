import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageSquareMore,
  Phone,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import paymentMethods from "@/assets/payment.png";
export default function Footer() {
  const t = useTranslations("common.footer");

  return (
    <footer className="bg-[#3ABFF8] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("QuickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">{t("Home")}</Link>
              </li>
              <li>
                <Link href="/about">{t("OurStory")}</Link>
              </li>
              <li>
                <Link href="/products">{t("Products")}</Link>
              </li>
              <li>
                <Link href="/services">{t("Services")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("ContactUs")}</Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Contacts")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span dir="ltr">{t("Phone1")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span dir="ltr">{t("Phone2")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{t("Email")}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>{t("Address")}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("FollowUs")}</h3>
            <div className="space-y-3">
              <Link
                href="https://www.facebook.com/medlinks.uae/"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <Facebook className="h-4 w-4" />
                <span>{t("Facebook")}</span>
              </Link>
              <Link
                href="https://www.instagram.com/medlinks_uae/"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <Instagram className="h-4 w-4" />
                <span>{t("Instagram")}</span>
              </Link>
              <Link
                href="https://wa.link/0x42pa"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <MessageSquareMore className="h-4 w-4" />
                <span>{t("WhatsApp")}</span>
              </Link>
              <Link
                href="https://twitter.com/MedLinks_2025"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <Twitter className="h-4 w-4" />
                <span>{t("Twitter")}</span>
              </Link>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Payment")}</h3>
            <div className="flex space-x-2 mb-4" dir="ltr">
              <Image alt="payment method" width={400} src={paymentMethods} />
            </div>
            <p className="text-sm text-gray-200">{t("Secure")}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-200">{t("Rights")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/our-policy" className="text-sm hover:text-gray-200">
              {t("OurPolicy")}
            </Link>
            <Link href="/return-policy" className="text-sm hover:text-gray-200">
              {t("ReturnPolicy")}
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm hover:text-gray-200"
            >
              {t("Terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
