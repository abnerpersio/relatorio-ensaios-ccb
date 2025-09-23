import { ListingLocation } from "@/app/entities/listing";
import { cn } from "@/app/lib/utils/styles";

type LocationButtonProps = {
  location: ListingLocation;
  onClick: (location: ListingLocation) => void;
};

export function LocationButton({ location, onClick }: LocationButtonProps) {
  return (
    <button
      key={location.id}
      type="button"
      tabIndex={0}
      onClick={() => onClick(location)}
      className={cn(
        "w-full flex flex-col items-start justify-center gap-0.5 h-14",
        "bg-accent text-accent-foreground text-base py-1 px-2 rounded-sm",
        "border border-accent-foreground/10",
        "cursor-pointer hover:bg-accent/50 hover:border-accent-foreground/30 focus:bg-accent/70 focus:border-accent-foreground/50",
        "transition-all duration-200 ease-in-out"
      )}
    >
      <p className="text-sm font-semibold leading-4 text-blue-950">
        {location.displayName}
      </p>

      <p className="text-xs leading-4 text-foreground">{location.city}</p>
    </button>
  );
}
