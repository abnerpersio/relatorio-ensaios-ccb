import { Env } from "@/app/constants/env";
import { externalStorageKeys } from "@/app/constants/external-storage-keys";
import { queryKeys } from "@/app/constants/query-keys";
import { ListingLocation } from "@/app/entities/listing";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = Env.storageBaseUrl.concat(externalStorageKeys.locations);

type ListingConfig = {
  version: string;
  locations: ListingLocation[];
};

const fetchConfigs = async () =>
  axios.get<ListingConfig>(URL).then((res) => res.data);

export function useListings() {
  const { data, ...query } = useQuery({
    queryKey: queryKeys.listings.base,
    queryFn: fetchConfigs,
  });

  return { ...query, locations: data?.locations };
}
