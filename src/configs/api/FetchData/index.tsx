import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type BaseLayoutProps = {
  children?: React.ReactNode;
};

const queryClient = new QueryClient();

export default function FetchData({ children }: BaseLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
