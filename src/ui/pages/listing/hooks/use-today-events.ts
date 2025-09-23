import { Env } from "@/app/constants/env";
import { externalStorageKeys } from "@/app/constants/external-storage-keys";
import { queryKeys } from "@/app/constants/query-keys";
import type { ListingLocation } from "@/app/entities/listing";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = Env.storageBaseUrl.concat(externalStorageKeys.today);

type TodayConfig = {
  version: string;
  locations: ListingLocation[];
};

const fetchTodayConfigs = async () =>
  axios.get<TodayConfig>(URL).then((res) => res.data);

export function useTodayEvents() {
  const { data, ...query } = useQuery({
    queryKey: queryKeys.listings.today,
    queryFn: fetchTodayConfigs,
  });

  return { ...query, locations: data?.locations };
}
