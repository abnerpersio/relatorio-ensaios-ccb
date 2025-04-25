import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export function QueryProvider(props: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
