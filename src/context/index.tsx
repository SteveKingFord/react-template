/*
 * @Author: kingford
 * @Date: 2021-04-05 12:40:24
 * @LastEditTime: 2021-04-05 12:47:40
 */
import { ReactNode } from 'react';
import { AuthProvider } from 'context/auth-context';

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
