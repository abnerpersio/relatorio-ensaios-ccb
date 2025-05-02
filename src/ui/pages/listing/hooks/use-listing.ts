import type { ListingLocation } from '@/app/entities/listing';
import { useEffect, useState } from 'react';
import { useListingConfig } from './use-listing-config';

type ListingOptions = {};

export function useListings(options?: ListingOptions) {
  const { config } = useListingConfig();

  const { cidade, estado } = options || {};

  const [listings, setListings] = useState<ListingLocation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchEnsaios() {
  //       setIsLoading(true);

  //       try {
  //         const response = await fetch('/brasil/ensaios-hoje.json');
  //         if (!response.ok) {
  //           throw new Error('Erro ao buscar os ensaios.');
  //         }

  //         const data: Listing[] = await response.json();

  //         let filtrados = data;

  //         if (estado) {
  //           filtrados = filtrados.filter((e) => e.estado.toLowerCase() === estado.toLowerCase());
  //         }

  //         if (cidade) {
  //           filtrados = filtrados.filter((e) => e.cidade.toLowerCase() === cidade.toLowerCase());
  //         }

  //         setListings(filtrados);
  //       } catch {
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }

  //     fetchEnsaios();
  //   }, [cidade, estado]);

  console.log('config', config);

  return {
    listings,
    isLoading,
  };
}
