import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { SiteLayout } from "@/components/site/Layout";
import { newRoyalServicesData } from "@/lib/brandServiceData";

export default function NewRoyalServicesPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate data={newRoyalServicesData} />
    </SiteLayout>
  );
}
