import { ActivityIndicator, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import ReviewItem from '../Review/ReviewItem';
import Text from '../Text';
import RepositoryItem from './RepositoryItem';

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} />;
};

const SingleRepository = () => {
  const { id } = useParams();
  const { 
    repository, 
    loadingInitial,
    loadingMore, 
    error, 
    fetchMore 
  } = useRepository(id, 2);

  if (loadingInitial || !repository) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const reviews = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList 
      data={reviews}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.2}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<RepositoryInfo repository={repository} />}
      ListFooterComponent={loadingMore ? <ActivityIndicator /> : null}
    />
  );
};

export default SingleRepository;
