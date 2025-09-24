/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: true;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_OAUTH_AUTHORIZATION_URL: string;
  readonly VITE_OAUTH_CLIENT_ID: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SENTRY_ENV: string;
  readonly VITE_CLARITY_PROJECT_ID: string;
  readonly VITE_STORAGE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
