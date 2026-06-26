import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { SiteLayout } from "@/components/site/Layout";
import { aishwaryaRentalData } from "@/lib/brandServiceData";

export default function AishwaryaRentalPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate data={aishwaryaRentalData} />
    </SiteLayout>
  );
}
