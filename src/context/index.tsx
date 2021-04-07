/*
 * @Author: kingford
 * @Date: 2021-04-05 12:40:24
 * @LastEditTime: 2021-04-07 13:12:48
 */
import { ReactNode } from 'react';
import { AuthProvider } from 'context/auth-context';
import { QueryClient, QueryClientProvider } from 'react-query';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
};
