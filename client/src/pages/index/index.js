// @flow

import React from 'react';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import {
  type SearchPosts,
  type SearchPostsVariables,
} from '../../generated/types.flow';

const SEARCH_POSTS = gql`
  query SearchPosts($search: String!) {
    search(search: $search) {
      id
      title
      text
    }
  }
`;

const IndexPage = () => (
  <Query query={SEARCH_POSTS} variables={{ search: '' }}>
    {({
      loading,
      error,
      data: { search },
    }: QueryRenderProps<SearchPosts, SearchPostsVariables>) => (
      <React.Fragment>
        {loading && 'lodaing'}
        {error && 'error'}
        {!loading &&
          !error &&
          search.map(({ id, title, text }) => (
            <React.Fragment key={id}>
              <h1>{title}</h1>
              <p>{text}</p>
            </React.Fragment>
          ))}
      </React.Fragment>
    )}
  </Query>
);

export default IndexPage;
