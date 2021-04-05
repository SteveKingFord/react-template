/*
 * @Author: kingford
 * @Date: 2021-03-30 12:31:03
 * @LastEditTime: 2021-04-05 13:21:06
 */
import React from "react";
import { Login } from 'auth/unauthenticated-app/login'
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from 'auth/authenticated-app'
import { UnauthenticatedApp } from 'auth/unauthenticated-app'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
