import { useQuery } from '@apollo/client/react';
import { ActivityIndicator, FlatList } from 'react-native';
import { GET_CURRENT_USER } from '../../graphql/queries';
import ReviewItem from './ReviewItem';


const MyReviews = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true },
  });
  
  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const reviews = data?.me?.reviews?.edges.map(edge => edge.node) || [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} showRepositoryName={true} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default MyReviews;