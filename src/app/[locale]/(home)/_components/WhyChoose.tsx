import { useTranslations } from "next-intl";
import { Heart, Shield, Clock, Users } from "lucide-react";

export default function WhyChooseUs() {
  const t = useTranslations("common.home.whyChoose");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Compassionate Care */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3ABFF8] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.care.title")}
            </h3>
            <p className="text-gray-600">{t("features.care.description")}</p>
          </div>

          {/* Quality Assured */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.quality.title")}
            </h3>
            <p className="text-gray-600">{t("features.quality.description")}</p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.support.title")}
            </h3>
            <p className="text-gray-600">{t("features.support.description")}</p>
          </div>

          {/* Expert Team */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("features.team.title")}
            </h3>
            <p className="text-gray-600">{t("features.team.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
