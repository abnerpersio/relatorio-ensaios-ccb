export const Env = {
  sentryDsn: import.meta.env.VITE_SENTRY_DSN,
  sentryEnv: import.meta.env.VITE_SENTRY_ENV,
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID,
  isProduction: import.meta.env.PROD,
  storageBaseUrl: import.meta.env.VITE_STORAGE_BASE_URL as string,
};
