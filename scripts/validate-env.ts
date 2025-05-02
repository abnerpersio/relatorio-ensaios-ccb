import { z } from 'zod';

const schema = z.object({
  //   VITE_API_BASE_URL: z.string().min(1),
  VITE_SENTRY_DSN: z.string().min(1),
  //   VITE_OAUTH_AUTHORIZATION_URL: z.string().min(1),
  //   VITE_OAUTH_CLIENT_ID: z.string().min(1),
  VITE_STORAGE_BASE_URL: z.string().min(1),
});

const { error } = schema.safeParse(process.env);

if (error?.issues.length) {
  const issues = error.issues.map((issue) => `${issue.path}: ${issue.message}`).join('\n');
  throw new Error(`Invalid ENV:\n${issues}`);
}
