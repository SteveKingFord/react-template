/*
 * @Author: kingford
 * @Date: 2021-04-12 18:55:21
 * @LastEditTime: 2021-05-24 00:58:13
 */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import { Skeleton } from '@material-ui/lab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import styles from './index.module.css'
import Chip from '@material-ui/core/Chip';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    position: "relative",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10
  }
});


export const Fibrosis: React.FC = () => {
  const classes = useStyles();

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://bcore.top/api/pubmed/fibrosis?pageSize=10&pageIndex=${pageIndex}`).then((res) => {
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
    window.scrollTo(0, 0)

  };

  function skeleton() {
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
      {isLoading ? skeleton() : ''}
      <NowPage><Button variant="contained" color="secondary">
        当前页：{pageIndex}
      </Button></NowPage>
      <ArticleContainer>
        {list.map((item: any) => {
          return (
            <Card className={classes.root} key={item.ID}>
              <PageIndex>{item.ID}</PageIndex>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <HeadTitle>
                    <a className={styles.link} href={'https://pubmed.ncbi.nlm.nih.gov' + item.href} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </HeadTitle>
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <AuthorList>
                    {item.fibrosis_authors.map((author: any, index: number) => {
                      return (
                        <AuthorItem key={author.ID}>
                          {author.name}
                          <sup>{index + 1}</sup>
                        </AuthorItem>
                      );
                    })}
                  </AuthorList>
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <Abstract>Abstract</Abstract>
                  {item.fibrosis_abstracts.map((abs: any) => {
                    return (
                      <ArticleItem key={abs.ID}>
                        <strong>{abs.strong}</strong> &nbsp;
                        {abs.content}
                      </ArticleItem>
                    );
                  })}
                </Typography>
                <CardActions className="flex-ac-jb">
                  <Chip
                    icon={<LabelImportantIcon />}
                    label={item.type}
                    color="secondary"
                  />
                  <EupData>
                    <span>发布日期：</span>
                    <strong> {item.eup_date}</strong>
                  </EupData>
                </CardActions>
              </CardContent>

            </Card>
          )
        })}

      </ArticleContainer>
      <PaginationBox>
        <span>总数：{total}</span>
        <Pagination count={totalPage} color="secondary" onChange={handleChange} />
      </PaginationBox>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding:   2rem;
  position: relative;

`;


const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

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
  margin-right: 1rem;
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
  font-size: 2rem;
  color: #212121;
`;

const PaginationBox = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NowPage = styled.span`
  position: fixed;
  left: 6rem;
  top:8rem;
`;

const PageIndex = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  padding: 1rem 2rem;
  background-color: #f50057;
`;

const EupData = styled.div`
  font-size: 1.6rem;
`