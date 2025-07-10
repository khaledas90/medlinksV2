import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedWrapper } from "@/components/AnimatedWrapper"
import CategoryCard from "@/components/common/CategoryCard"
import { getCategoriesTypes } from "@/actions/categories"
import { getTranslations } from "next-intl/server"

export default async function MedicalEquipment() {
    const categoryRent = await getCategoriesTypes({ type: 3 }) || []
    const categorySale = await getCategoriesTypes({ type: 1 }) || []
     const t = await getTranslations('common.home');
   

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('Medical Equipment Categories')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('Explore our wide range of medical equipment available for sale and rent')}
          </p>
        </div>

        <Tabs defaultValue="for-sale" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger className="cursor-pointer" value="for-sale">{t('Categories for Sale')}</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="for-rent">{t('Categories for Rent')}</TabsTrigger>
          </TabsList>

          {/* ——— SALE TAB ——— */}
          <TabsContent value="for-sale">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categorySale.map(category => (
                  <AnimatedWrapper key={category.id}>
                   <CategoryCard
                      category={category}
                    />
                  </AnimatedWrapper>
                ))}
            </div>
          </TabsContent>

          {/* ——— RENT TAB ——— */}
          <TabsContent value="for-rent">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryRent.map(category => (
                  <AnimatedWrapper key={category.id}>
                    <CategoryCard
                      category={category}
                    />
                  </AnimatedWrapper>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}