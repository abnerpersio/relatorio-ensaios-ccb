import { LaunchScreen } from '@/ui/components/launch-screen';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const MainLayout = lazy(() => import('@/ui/layouts/main-layout'));

const ListingPage = lazy(() => import('@/ui/pages/listing'));

export function Router() {
  return (
    <Suspense fallback={<LaunchScreen isLoading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<ListingPage />} />
          <Route path={ROUTES.listing} element={<ListingPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
