import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first = 2, after = null) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { id, first, after },
    fetchPolicy: 'cache-and-network',
  });

  return { 
    repository: data ? data.repository : null,
    error,
    loading,
    fetchMore
   };
};

export default useRepository;