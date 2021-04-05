/*
 * @Author: kingford
 * @Date: 2021-04-03 15:22:01
 * @LastEditTime: 2021-04-05 11:38:29
 */
import React, { FormEvent } from 'react';

export const Register = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const register = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
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
    register({ username, password });
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
        <button type="submit">注册</button>
      </div>
    </form>
  );
};
