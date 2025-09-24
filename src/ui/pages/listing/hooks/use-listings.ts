import { Env } from "@/app/constants/env";
import { externalStorageKeys } from "@/app/constants/external-storage-keys";
import { queryKeys } from "@/app/constants/query-keys";
import { ListingLocation } from "@/app/entities/listing";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = Env.storageBaseUrl.concat(externalStorageKeys.locations);

type LocationsResult = {
  locations: ListingLocation[];
};

const fetchLocations = async () =>
  axios.get<LocationsResult>(URL).then((res) => res.data);

export function useListings() {
  const { data, ...query } = useQuery({
    queryKey: queryKeys.listings.base,
    queryFn: fetchLocations,
  });

  return { ...query, locations: data?.locations };
}
