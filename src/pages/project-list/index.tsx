/*
 * @Author: kingford
 * @Date: 2021-04-03 11:35:51
 * @LastEditTime: 2021-04-03 15:44:06
 */
import React, { useState, useEffect } from 'react';
import { cleanObject } from 'utils';
import { useMount, useDebounce } from 'hooks';
import { SearchPanel } from './search-panel';
import { List } from './list';
import qs from 'qs';
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debounceParam = useDebounce(param, 500);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
