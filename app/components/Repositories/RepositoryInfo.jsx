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
  const { repository, loading, error } = useRepository(id);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const reviews = repository.reviews 
    ? repository.reviews.edges.map(edge => edge.node) 
    : [];

  return (
    <FlatList 
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;