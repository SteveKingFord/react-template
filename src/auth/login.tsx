/*
 * @Author: kingford
 * @Date: 2021-04-03 15:21:31
 * @LastEditTime: 2021-04-05 13:00:23
 */
import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';

export const Login = () => {
  const { login, user } = useAuth()

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    console.log(username, password);
    login({ username, password });
  };
  return (
    <form onSubmit={submit}>
      {user ? <div>用户名：{user?.name},token:{user?.token}</div> : ''}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">用户名</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  );
};
