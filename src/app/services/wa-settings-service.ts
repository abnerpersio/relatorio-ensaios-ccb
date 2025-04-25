import { API } from '@/app/constants/api';
import { httpClient } from './http';

type GetWASettingsResult = {
  settings: {
    qrCode: string | null;
    requestedAt: string | null;
    failedReason: string | null;
  } | null;
};

export class WASettingsService {
  async getStatus() {
    const result = await httpClient.get<GetWASettingsResult>(API.wa.status);
    return result.data.settings;
  }

  async requestSync() {
    await httpClient.post(API.wa.requestWASync, {});
  }
}
