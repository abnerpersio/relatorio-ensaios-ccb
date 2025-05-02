import { API } from '../constants/api';
import type { Listing } from '../entities/listing';
import { httpClient } from './http';

type ListingFilters = {
  cursor?: string | null;
};

type GetListingsResult = {
  nextCursor: string | null;
  listings: Listing[];
};

export class ListingService {
  async signIn(filters: ListingFilters) {
    const result = await httpClient.get<GetListingsResult>(API.auth.signIn, {
      params: filters,
    });
    return result?.data;
  }
}
