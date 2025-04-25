import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { queryKeys } from '../constants/query-keys';
import { InviteService } from '../services/invite-service';

export function useInvites(celebrationId?: string) {
  const { data, ...query } = useInfiniteQuery({
    queryKey: queryKeys.invites.list(celebrationId!),
    initialPageParam: null as string | null,
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!celebrationId,
    retry: 1,
    queryFn: ({ pageParam }) => new InviteService().list(celebrationId!, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
  });

  const invites = useMemo(() => data?.pages.flatMap((page) => page.invites), [data?.pages]);

  return {
    ...query,
    invites: invites || [],
  };
}
