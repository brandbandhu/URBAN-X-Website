import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { SiteLayout } from "@/components/site/Layout";
import { deMarvelFurnishingsData } from "@/lib/brandServiceData";

export default function UrbanDePage() {
  return (
    <SiteLayout>
      <ServicePageTemplate data={deMarvelFurnishingsData} />
    </SiteLayout>
  );
}
