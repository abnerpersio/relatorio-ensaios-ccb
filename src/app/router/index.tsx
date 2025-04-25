import { LaunchScreen } from '@/ui/components/launch-screen';
import { AuthLayout } from '@/ui/layouts/auth-layout';
import { DashboardLayout } from '@/ui/layouts/dashboard-layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { AuthGuard } from './guards/auth-guard';

const SignInPage = lazy(() => import('@/ui/pages/auth/sign-in'));
const SignUpPage = lazy(() => import('@/ui/pages/auth/sign-up'));
const AuthCallbackPage = lazy(() => import('@/ui/pages/auth/callback'));
const InvitesPage = lazy(() => import('@/ui/pages/dashboard/invites'));
const WAPage = lazy(() => import('@/ui/pages/dashboard/wa'));
const MessagesPage = lazy(() => import('@/ui/pages/dashboard/messages'));

export function Router() {
  return (
    <Suspense fallback={<LaunchScreen isLoading />}>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTES.auth.signIn} element={<SignInPage />} />
            <Route path={ROUTES.auth.signUp} element={<SignUpPage />} />
            <Route path={ROUTES.auth.authCallback} element={<AuthCallbackPage />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.dashboard.home} element={<InvitesPage />} />
            <Route path={ROUTES.dashboard.invites} element={<InvitesPage />} />
            <Route path={ROUTES.dashboard.wa} element={<WAPage />} />
            <Route path={ROUTES.dashboard.messages} element={<MessagesPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
