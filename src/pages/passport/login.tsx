/*
 * @Author: kingford
 * @Date: 2021-04-03 15:21:31
 * @LastEditTime: 2021-04-03 16:03:16
 */
import React, { FormEvent } from 'react';
import qs from 'qs';

export const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const login = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    console.log(username, password);
    login({ username, password });
  };
  return (
    <form onSubmit={submit}>
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
