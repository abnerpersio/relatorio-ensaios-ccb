import '@/ui/styles/global.css';

import { ErrorBoundary } from '@/app/providers/error-boundary';
import { QueryProvider } from '@/app/providers/query';
import { Router } from '@/app/router';
import { PageError } from '@/ui/components/page-error';
import { Toaster } from '@/ui/components/shared/toaster';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <ErrorBoundary fallback={<PageError message="Ocorreu um erro inesperado! Tente recarregar a página" />}>
      <BrowserRouter>
        <QueryProvider>
          <Router />

          <Toaster position="bottom-right" />
        </QueryProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
