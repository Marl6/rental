import type { FC } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { mockAddOns, mockRentals } from "@/lib/mock/rentals";
import { RentalAddOnCard } from "@/components/rentals/RentalAddOnCard";
import { RentalFeatureCard } from "@/components/rentals/RentalFeatureCard";
import { RentalPackageCard } from "@/components/rentals/RentalPackageCard";
import { RentalProductCard } from "@/components/rentals/RentalProductCard";

export const RentalsCatalog: FC = () => {
  const feature = mockRentals.find((rental) => rental.type === "horse");
  const atvRentals = mockRentals.filter((rental) => rental.type === "atv");
  const addOn = mockAddOns[0];

  return (
    <SectionWrapper>
      {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
      <div className="flex flex-col gap-4">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          The Rentals Catalog
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant italic">
          Showing 54 premium rental options
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {feature ? (
          <div className="md:col-span-8">
            <RentalFeatureCard
              title={feature.name}
              description={feature.description}
              image={feature.image}
              badge={feature.badge}
              price={feature.price}
              priceUnit={feature.priceUnit}
            />
          </div>
        ) : null}
        {atvRentals[0] ? (
          <div className="md:col-span-4">
            <RentalProductCard
              title={atvRentals[0].name}
              description={atvRentals[0].description}
              image={atvRentals[0].image}
              price={atvRentals[0].price}
              priceUnit={atvRentals[0].priceUnit}
            />
          </div>
        ) : null}
        <div className="md:col-span-4">
          <RentalPackageCard
            title="Corporate Expeditions"
            description="Tailored itineraries for executive retreats, client experiences, and team bonding across the ranch."
            ctaLabel="Plan a group"
            ctaHref="/contact"
          />
        </div>
        {atvRentals[1] ? (
          <div className="md:col-span-4">
            <RentalProductCard
              title={atvRentals[1].name}
              description={atvRentals[1].description}
              image={atvRentals[1].image}
              price={atvRentals[1].price}
              priceUnit={atvRentals[1].priceUnit}
            />
          </div>
        ) : null}
        {addOn ? (
          <div className="md:col-span-4">
            <RentalAddOnCard
              title={addOn.name}
              price={addOn.price}
              priceUnit={addOn.priceUnit}
              perks={addOn.perks}
            />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
};
