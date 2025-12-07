import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rating: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ratingNumber: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} />;
};

const ReviewItem = ({ review }) => {
  return (
    <View>
      <ItemSeparator />
      <View style={styles.container}>
        <View style={styles.rating}>
          <Text style={styles.ratingNumber}>{review.rating}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{review.user.username}</Text>
          <Text style={{ color: 'gray' }}>{new Date(review.createdAt).toLocaleDateString()}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
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