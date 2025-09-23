import type { ListingLocation } from "@/app/entities/listing";
import { Skeleton } from "@/ui/components/shared/skeleton";
import { LocationConfigModal } from "@/ui/pages/listing/components/location-config-modal";
import { t } from "i18next";
import { useState } from "react";
import { LocationButton } from "./components/location-button";
import { useListings } from "./hooks/use-listings";
import { useTodayEvents } from "./hooks/use-today-events";

export default function ListingPage() {
  const { locations, isFetching: isConfigLoading } = useListings();
  const { locations: todayLocations, isFetching: isTodayLoading } =
    useTodayEvents();

  const [selectedLocation, setSelectedLocation] =
    useState<ListingLocation | null>(null);

  const hasLocations = !isConfigLoading && locations;
  const hasTodayConfig = !isTodayLoading && todayLocations;

  const handleLocationClick = (location: ListingLocation) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 pb-12">
      <div className="w-full flex flex-col items-center gap-8 max-w-[580px]">
        <section className="w-full">
          <h3 className="text-base font-semibold text-blue-950 mb-4 text-center">
            {t("pages.listing.today_rehearsals")}
          </h3>

          <div className="w-full flex flex-col items-center gap-3">
            {isTodayLoading &&
              Array.from({ length: 2 }).map((_, index) => (
                <Skeleton className="w-full h-18" key={`today-${index}`} />
              ))}

            {hasTodayConfig &&
              todayLocations.length > 0 &&
              todayLocations.map((location) => (
                <LocationButton
                  key={location.id}
                  location={location}
                  onClick={handleLocationClick}
                />
              ))}

            {hasTodayConfig && todayLocations.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                {t("pages.listing.none_rehearsals")}
              </p>
            )}
          </div>
        </section>

        <section className="w-full">
          <h3 className="text-base font-semibold text-blue-950 mb-4 text-center">
            {t("pages.listing.other_rehearsals")}
          </h3>

          <div className="w-full flex flex-col items-center gap-1.5 sm:gap-2">
            {isConfigLoading &&
              Array.from({ length: 4 }).map((_, index) => (
                <Skeleton className="w-full h-18" key={`other-${index}`} />
              ))}

            {hasLocations &&
              locations.map((location) => (
                <LocationButton
                  key={location.id}
                  location={location}
                  onClick={handleLocationClick}
                />
              ))}
          </div>
        </section>
      </div>

      <LocationConfigModal
        location={selectedLocation}
        isOpen={!!selectedLocation}
        onClose={handleCloseModal}
      />
    </div>
  );
}
