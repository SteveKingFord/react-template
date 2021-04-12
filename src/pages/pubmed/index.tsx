/*
 * @Author: kingford
 * @Date: 2021-04-12 18:55:21
 * @LastEditTime: 2021-04-12 19:37:46
 */
import React from 'react';
import styled from '@emotion/styled';

export const Pubmed: React.FC = () => {
  return (
    <Container>
      <Article>
        <HeadTitle>
          Longitudinal displacement of the carotid wall and cardiovascular risk factors: associations with aging,
          adiposity, blood pressure and periodontal disease independent of cross-sectional distensibility and
          intima-media thickness
        </HeadTitle>
        <AuthorList>
          <AuthorItem>
            Guillaume Zahnd
            <sup>1</sup>,
          </AuthorItem>
          <AuthorItem>Didier Vray,</AuthorItem>
          <AuthorItem>
            André Sérusclat, Djhianne Alibay, Mark Bartold, Alex Brown, Marion Durand, Lisa M Jamieson, Kostas Kapellas,
            Louise J Maple-Brown, Kerin O'Dea, Philippe Moulin, David S Celermajer, Michael R Skilton
          </AuthorItem>
        </AuthorList>
        <div>
          <Abstract>Abstract</Abstract>
          <ArticleItem>
            Guillaume Zahnd 1, Didier Vray, André Sérusclat, Djhianne Alibay, Mark Bartold, Alex Brown, Marion Durand,
            Lisa M Jamieson, Kostas Kapellas, Louise J Maple-Brown, Kerin O'Dea, Philippe Moulin, David S Celermajer,
            Michael R Skilton
          </ArticleItem>
        </div>
      </Article>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
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
`;
