/*
 * @Author: kingford
 * @Date: 2021-04-03 11:35:51
 * @LastEditTime: 2021-04-05 16:01:06
 */
import React, { useState, useEffect } from 'react';
import { cleanObject } from 'utils';
import { useMount, useDebounce } from 'hooks';
import { useHttp } from 'hooks/http';
import { SearchPanel } from './search-panel';
import { List } from './list';


export const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debounceParam = useDebounce(param, 500);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const http = useHttp()

  useEffect(() => {
    http('projects', { data: cleanObject(debounceParam) }).then(setList)
  }, [debounceParam]);

  useMount(() => {
    http('users').then(setUsers)
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
