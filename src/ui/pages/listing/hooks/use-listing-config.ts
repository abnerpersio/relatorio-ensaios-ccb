import { Env } from '@/app/constants/env';
import { externalStorageKeys } from '@/app/constants/external-storage-keys';
import { queryKeys } from '@/app/constants/query-keys';
import type { ListingLocation } from '@/app/entities/listing';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const URL = Env.storageBaseUrl.concat(externalStorageKeys.config);

type ListingConfig = {
  version: string;
  baseURL: string;
  locations: ListingLocation[];
};

const fetchConfigs = async () => axios.get<ListingConfig>(URL).then((res) => res.data);

export function useListingConfig() {
  const { data, ...query } = useQuery({
    queryKey: queryKeys.listings.config,
    queryFn: fetchConfigs,
  });

  return { ...query, config: data };
}
