export const API = {
  auth: {
    signIn: '/v1/infra/auth/sign-in',
    refreshToken: '/v1/infra/auth/refresh-token',
    exchangeCode: '/v1/infra/auth/code',
  },
  user: {
    profile: '/v1/admin/user/profile',
  },
  listings: {
    base: '/v1/listings',
  },
};
