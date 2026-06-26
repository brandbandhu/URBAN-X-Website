import { Link } from "@/components/site/AppLink";
import { SiteLayout } from "@/components/site/Layout";
import { BrandServiceDetailTemplate } from "@/components/site/BrandServiceDetailTemplate";
import {
  aishwaryaRentalData,
  deMarvelFurnishingsData,
  royalFoodsData,
  newRoyalServicesData,
} from "@/lib/brandServiceData";
import { slugify } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const brandCatalog = {
  "new-royal-services": newRoyalServicesData,
  "aishwarya-rental": aishwaryaRentalData,
  "de-marvel-furnishings": deMarvelFurnishingsData,
  "royal-foods": royalFoodsData,
  "urban-de": deMarvelFurnishingsData,
} as const;

type BrandKey = keyof typeof brandCatalog;

export default function BrandServiceDetailPage({
  brandKey,
  serviceSlug,
}: {
  brandKey: BrandKey;
  serviceSlug: string;
}) {
  const brand = brandCatalog[brandKey];
  const service = brand.services.find((item) => slugify(item.title) === serviceSlug);

  if (!service) {
    return (
      <SiteLayout>
        <div className="container-x flex min-h-[60vh] items-center justify-center py-24 text-center">
          <div className="max-w-lg">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Service not found
            </div>
            <h1 className="text-3xl font-bold text-primary md:text-5xl">
              We could not find that service page.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Please go back to the brand page and choose another service.
            </p>
            <div className="mt-8">
              <Link
                to={brand.detailBasePath}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-3 font-semibold text-primary hover-lift"
              >
                Back to Brand <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const relatedServices = brand.services
    .filter((item) => item.title !== service.title)
    .slice(0, 4)
    .map((item) => ({
      ...item,
      href: `${brand.detailBasePath}/${slugify(item.title)}`,
    }));

  return (
    <SiteLayout>
      <BrandServiceDetailTemplate
        data={{
          brandName: brand.companyName,
          brandTagline: brand.tagline,
          brandAccentLabel: brand.accentLabel,
          brandBanner: brand.banner,
          brandIntro: brand.intro,
          brandAbout: brand.about,
          brandBenefits: brand.benefits,
          brandProcess: brand.process,
          brandBasePath: brand.detailBasePath,
          service,
          serviceHighlights: [
            `Tailored planning and supervision for ${service.title.toLowerCase()}.`,
            `Delivered by ${brand.companyName} with clear coordination and quality checks.`,
            `Flexible support shaped around your site, timeline and scope.`,
            `Simple next steps if you want to continue with a quote or consultation.`,
          ],
          relatedServices,
        }}
      />
    </SiteLayout>
  );
}
