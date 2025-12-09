import { gql } from '@apollo/client';
import { PAGEINFO_DETAILS, REPOSITORY_DETAILS, REVIEW_DETAILS, USER_DETAILS } from './fragments';

export const GET_REPOSITORIES_SORTED = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node { 
          ...RepositoryDetails      
        }
      }           
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  query Me {
    me {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
            user {
              ...UserDetails
            }
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }  
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${USER_DETAILS}
  ${PAGEINFO_DETAILS}
`;

export const GET_CURRENT_USER = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      ...UserDetails
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
  ${USER_DETAILS}
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;