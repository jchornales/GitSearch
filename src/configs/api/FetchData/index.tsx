import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { BaseLayoutProps, ReposData, User, UserData } from '../../types/Types';

export default function FetchData({ children }: BaseLayoutProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            retry: false,
          },
        },
      })
  );
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

export async function fetchUserRepos(username: string): Promise<ReposData[]> {
  return axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.data);
}
