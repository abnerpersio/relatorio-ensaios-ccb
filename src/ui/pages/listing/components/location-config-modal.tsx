import type { ListingLocation } from "@/app/entities/listing";
import { Button } from "@/ui/components/shared/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/ui/components/shared/dialog";
import { t } from "i18next";

type LocationConfigModalProps = {
  location: ListingLocation | null;
  isOpen: boolean;
  onClose: () => void;
};

export function LocationConfigModal({
  location,
  isOpen,
  onClose,
}: LocationConfigModalProps) {
  if (!location) return null;

  const dateLabel = location.nextDate
    ? Intl.DateTimeFormat("pt-BR", {
        dateStyle: "long",
        timeZone: "UTC",
      }).format(new Date(location.nextDate))
    : "";

  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal>
      <DialogContent className="w-full max-w-[400px] max-h-[80vh] gap-6 px-3 overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col text-left">
            <h3 className="text-base font-semibold">{location.displayName}</h3>
            <p className="text-sm text-muted-foreground">{location.city}</p>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">
                {t("pages.listing.modal.schedule")}
              </h4>

              <p className="text-sm text-muted-foreground">
                {location.schedule.label}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-semibold text-sm">
                {t("pages.listing.modal.hours")}
              </h4>

              <p className="text-sm text-muted-foreground">
                {location.schedule.hours}
              </p>
            </div>
          </div>

          {!!dateLabel && (
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">
                {t("pages.listing.modal.next_date")}
              </h4>

              <p className="text-sm text-muted-foreground">{dateLabel}</p>
            </div>
          )}

          {location.address && (
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">
                {t("pages.listing.modal.address")}
              </h4>

              <p className="text-sm text-muted-foreground">
                {location.address}
              </p>
            </div>
          )}

          {location.observations && (
            <div className="p-3 space-y-1 bg-muted rounded-lg">
              <h4 className="font-semibold text-sm">
                {t("pages.listing.modal.observations")}
              </h4>

              <p className="text-sm text-muted-foreground">
                {location.observations}
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {t("generic.close")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
