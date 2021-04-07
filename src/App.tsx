/*
 * @Author: kingford
 * @Date: 2021-03-30 12:31:03
 * @LastEditTime: 2021-04-07 13:16:58
 */
import React from 'react';
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from 'auth/authenticated-app';
import { UnauthenticatedApp } from 'auth/unauthenticated-app';

const App: React.FC = () => {
  const { user } = useAuth();

  return <div className="App">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
};

export default App;
