import { ListingLocation } from "@/app/entities/listing";
import { DateUtils } from "@/app/lib/utils/date";
import { cn } from "@/app/lib/utils/styles";
import { Trans, useTranslation } from "react-i18next";

type LocationButtonProps = {
  location: ListingLocation;
  onClick: (location: ListingLocation) => void;
};

export function LocationButton({ location, onClick }: LocationButtonProps) {
  const { t } = useTranslation();

  const dateLabel = DateUtils.formatLongDate(location.nextDate);

  return (
    <button
      key={location.id}
      type="button"
      tabIndex={0}
      onClick={() => onClick(location)}
      className={cn(
        "w-full flex flex-col items-start sm:flex-row sm:justify-between sm:items-center gap-1 ",
        "bg-accent text-accent-foreground text-left text-base p-2 py-2.5 sm:py-2 rounded-sm",
        "border border-accent-foreground/10",
        "cursor-pointer hover:bg-accent/50 hover:border-accent-foreground/30 focus:bg-accent/70 focus:border-accent-foreground/50",
        "transition-all duration-200 ease-in-out"
      )}
    >
      <div className="flex flex-col items-start justify-center text-left gap-1">
        <p className="text-sm font-semibold leading-4 text-blue-950">
          {location.displayName}
        </p>

        <p className="text-xs leading-4 text-foreground">{location.city}</p>
      </div>

      {dateLabel && (
        <div className="flex text-[10px] sm:text-sm sm:flex-col sm:text-right justify-center gap-1">
          <p className="text-[10px] hidden sm:block font-normal">
            {t("pages.listing.modal.next_date")}
          </p>

          <p className="sm:font-[500]">{dateLabel}</p>
        </div>
      )}
    </button>
  );
}
