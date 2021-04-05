/*
 * @Author: kingford
 * @Date: 2021-04-03 11:36:32
 * @LastEditTime: 2021-04-05 11:47:29
 */
import React from 'react';

export interface IUser {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface ISearchPanelProps {
  users: IUser[];
  param: {
    name: string;
    personId: string;
  }
  setParam: (param: ISearchPanelProps['param']) => void
}


export const SearchPanel = ({ users, param, setParam }: ISearchPanelProps) => {
  return (
    <form>
      <input type="text" value={param.name} onChange={(evt) => setParam({ ...param, name: evt.target.value })} />
      <select value={param.personId} onChange={(evt) => setParam({ ...param, personId: evt.target.value })}>
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
