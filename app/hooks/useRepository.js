import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first) => {
  const { 
    data, 
    loading, 
    error, 
    fetchMore, 
    networkStatus 
  } = useQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });
  
  const loadingInitial = loading && !data;
  const loadingMore = networkStatus === 3;


  const handleFetchMore = () => {
    const canFetchMore = !loadingMore && data?.repository?.reviews?.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        id,
        first,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  }

  return { 
    repository: data ? data.repository : null,
    loadingInitial,
    loadingMore,
    error,
    fetchMore: handleFetchMore,
   };
};

export default useRepository;