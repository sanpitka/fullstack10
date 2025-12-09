import { useQuery } from '@apollo/client/react';
import { ActivityIndicator, FlatList } from 'react-native';
import { GET_CURRENT_USER } from '../../graphql/queries';
import useDeleteReview from '../../hooks/useDeleteReview';
import ReviewItem from './ReviewItem';



const MyReviews = () => {
  const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true },
  });
  const [deleteReview] = useDeleteReview();

  const handleDeleteReview = async (id) => {
    try {
      await deleteReview(id);
      refetch();
    } catch (e) {
      console.error("Failed to delete review:", e);
    }
  };
  
  
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
      renderItem={({ item }) => (
        <ReviewItem 
          review={item} 
          myReviewsSelected={true} 
          onDelete={() => handleDeleteReview(item.id)} 
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default MyReviews;