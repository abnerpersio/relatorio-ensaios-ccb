export const API = {
  auth: {
    signIn: '/v1/infra/auth/sign-in',
    refreshToken: '/v1/infra/auth/refresh-token',
    exchangeCode: '/v1/infra/auth/code',
  },
  user: {
    profile: '/v1/admin/user/profile',
  },
  invite: {
    list: '/v1/admin/celebration/:celebrationId/invites',
  },
  wa: {
    status: '/v1/admin/wa/status',
    requestWASync: '/v1/admin/wa/sync',
  },
};
