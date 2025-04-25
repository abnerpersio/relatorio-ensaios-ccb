import { API } from '@/app/constants/api';
import type { PersistenceInvite } from '@/app/entities/invite';
import { httpClient } from './http';

type ListInviteResult = {
  invites: PersistenceInvite[];
  nextCursor: string | null;
};

export class InviteService {
  async list(celebrationId: string, cursor?: string | null) {
    const url = API.invite.list.replace(':celebrationId', celebrationId);
    const result = await httpClient.get<ListInviteResult>(url, { params: { cursor } });
    return result.data;
  }
}
