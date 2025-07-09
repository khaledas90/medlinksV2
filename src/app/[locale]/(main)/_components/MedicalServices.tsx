import { Category, getCategoriesTypes } from "@/actions/categories"
import ServicesCard from "@/components/common/ServicesCard"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
import { getTranslations } from "next-intl/server"

export default async function MedicalServices( ) {
  const data = await getCategoriesTypes({type: 'services'})
    const t = await getTranslations('common.home');
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={clsx("animate-fade-in-up", "text-center mb-12")}
          style={{ animationDelay: `100ms`, animationFillMode: "both" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("Medical Services Offered At Home")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("We provide a wide range of medical services at home, ensuring you receive the care you need in the comfort of your own space")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 mb-12">
          {data?.map((service, index) => (
            <ServicesCard key={index} service={service} index={index} />
          ))}
        </div>

        <div
          className={clsx("animate-fade-in-up", "text-center")}
          style={{ animationDelay: `300ms`, animationFillMode: "both" }}
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
          >
            {t("Explore All Services")}
          </Button>
        </div>
      </div>
    </section>
  )
}
