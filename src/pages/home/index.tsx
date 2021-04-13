/*
 * @Author: kingford
 * @Date: 2021-04-07 20:38:34
 * @LastEditTime: 2021-04-13 14:45:10
 */
import React from 'react';
import { useAuth } from '../../context/auth-context';
import { AuthenticatedApp } from '../../auth/authenticated-app';
import { UnauthenticatedApp } from '../../auth/unauthenticated-app';

export const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="home">
      this is home
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
};
