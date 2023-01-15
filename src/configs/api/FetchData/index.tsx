import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { BaseLayoutProps, User, UserData } from '../../types/Types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

type Props = {
  username: string;
};

export default function FetchData({ children }: BaseLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export async function fetchUser(): Promise<User[]> {
  return axios
    .get('https://api.github.com/users')
    .then((response) => response.data);
}

export async function fetchUsersData(username: string): Promise<UserData> {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => response.data);
}
