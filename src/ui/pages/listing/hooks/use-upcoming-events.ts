import { Env } from "@/app/constants/env";
import { externalStorageKeys } from "@/app/constants/external-storage-keys";
import { queryKeys } from "@/app/constants/query-keys";
import type { ListingLocation } from "@/app/entities/listing";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = Env.storageBaseUrl.concat(externalStorageKeys.upcoming);

type UpcomingResult = Record<string, ListingLocation[]>;

const fetchTodayConfigs = async () =>
  axios.get<UpcomingResult>(URL).then((res) => res.data);

const select = (data: UpcomingResult) =>
  Object.entries(data).map(([key, locations]) => ({ key, locations }));

export function useUpcomingEvents() {
  return useQuery({
    queryKey: queryKeys.listings.today,
    queryFn: fetchTodayConfigs,
    select,
  });
}
