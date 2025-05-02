import { cn } from '@/app/lib/utils/styles';
import { Skeleton } from '@/ui/components/shared/skeleton';
import { t } from 'i18next';
import { useListings } from './hooks/use-listing';
import { useListingConfig } from './hooks/use-listing-config';

export default function ListingPage() {
  const { config, isFetching } = useListingConfig();

  const hasConfig = !isFetching && config;

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h2 className="text-blue-950 font-bold">{t('pages.listing.title')}</h2>

      <div className="w-full flex flex-col items-center gap-3 max-w-[580px]">
        {isFetching &&
          Array.from({ length: 6 }).map((_, index) => <Skeleton className="w-full h-18" key={index} />)}

        {hasConfig &&
          config.locations.map((location) => (
            <button
              key={location.id}
              type="button"
              tabIndex={0}
              className={cn(
                'w-full flex items-center h-18',
                'bg-accent text-accent-foreground text-base p-2 rounded-sm',
                'border border-accent-foreground/10',
                'cursor-pointer hover:bg-accent/50 hover:border-accent-foreground/30 focus:bg-accent/70 focus:border-accent-foreground/50',
                'transition-all duration-200 ease-in-out',
              )}
            >
              <p className="text-sm font-semibold text-blue-950">{location.displayName}</p>
            </button>
          ))}
      </div>
    </div>
  );
}
