/*
 * @Author: kingford
 * @Date: 2021-04-03 15:22:01
 * @LastEditTime: 2021-04-03 15:27:53
 */
import React from 'react';

export const Register = () => {
  return (
    <form>
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
