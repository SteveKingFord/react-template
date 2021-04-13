/*
 * @Author: kingford
 * @Date: 2021-04-12 18:55:21
 * @LastEditTime: 2021-04-13 23:02:12
 */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Skeleton } from '@material-ui/lab';

export const Pubmed: React.FC = () => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // http://bcore.top/api/article
    // http://localhost:8080
    // getList();
    setIsLoading(true);
    axios.get(`http://bcore.top/api/article?pageSize=10&pageIndex=${pageIndex}`).then((res) => {
      const { data, total } = res.data;
      setList(data);
      setTotal(total);
      const max = Math.ceil(total / 10);
      setTotalPage(max);
      setIsLoading(false);
    });
  }, [pageIndex]);

  const handleChange = (event: any, value: number) => {
    console.log(event, value);
    setPageIndex(value);
  };

  function seleton() {
    return (
      <div>
        <Skeleton />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
      </div>
    );
  }

  return (
    <Container>
      {isLoading ? seleton() : ''}
      {list.map((item: any) => {
        return (
          <Article key={item.ID}>
            <HeadTitle>
              <PageIndex>{item.ID}</PageIndex>
              <a href={'https://pubmed.ncbi.nlm.nih.gov' + item.href} target="_blank">
                {item.title}
              </a>
            </HeadTitle>
            <AuthorList>
              {item.authors.map((author: any, index: number) => {
                return (
                  <AuthorItem key={author.ID}>
                    {author.name}
                    {index === 0 && <sup>1</sup>} ,
                  </AuthorItem>
                );
              })}
            </AuthorList>
            <div>
              <Abstract>Abstract</Abstract>
              {item.abstracts.map((abs: any) => {
                return (
                  <ArticleItem key={abs.ID}>
                    <strong>{abs.strong}</strong>
                    {abs.content}
                  </ArticleItem>
                );
              })}
            </div>
          </Article>
        );
      })}
      <PaginationBox>
        <span>总数：{total}</span>
        <Pagination count={totalPage} color="primary" onChange={handleChange} />
      </PaginationBox>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 9rem 0 2rem;
`;

const Article = styled.article`
  padding: 20px;
  font-size: 1.8rem;
  background: #fff;
  margin-bottom: 2rem;
`;

const HeadTitle = styled.h1`
  font-size: 2.6rem;
  line-height: 1.4;
  margin: 0 0 1.6rem;
  word-wrap: break-word;
`;

const AuthorList = styled.div`
  display: inline;
  line-height: 1.5;
`;

const AuthorItem = styled.span`
  display: inline-block;
  color: #0071bc;
  line-height: 1.5;
`;

const Abstract = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 3.6rem;
  margin-bottom: 1.2rem;
`;

const ArticleItem = styled.p`
  margin: 1.2rem 0;
  text-indent: 2em;
`;

const PaginationBox = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const PageIndex = styled.span`
  padding: 0.2rem 0.8rem;
  color: #fff;
  background: #d1d1ea;
  margin-right: 2rem;
  border-radius: 0.4rem;
`;
