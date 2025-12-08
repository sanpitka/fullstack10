import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES_SORTED } from '../graphql/queries';

const useRepositories = ({ orderBy = "CREATED_AT", orderDirection = "DESC" } = {}) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES_SORTED, {
    variables: { orderBy,  orderDirection },
    fetchPolicy: 'cache-and-network',
  });
  
  return {
    repositories: data ? data.repositories: null,
    error,
    loading,
  }
};

export default useRepositories;