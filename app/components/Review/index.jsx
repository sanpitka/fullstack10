import { useQuery } from '@apollo/client/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-native';
import { ME } from '../../graphql/queries';
import useCreateReview from '../../hooks/useCreateReview';
import Text from '../Text';
import ReviewContainer from './ReviewContainer';

const Review = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const { data, loading } = useQuery(ME, { fetchPolicy: 'cache-and-network' });
const authorizedUser = data?.me;

  useEffect(() => {
    if (!loading && !authorizedUser) {
      navigate('/');
    }
  }, [loading, authorizedUser, navigate]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!authorizedUser) {
    return <Text>You must be signed in to create a review.</Text>;
  }

  const handleSubmit = async (values) => {
    try {
      await createReview(values);
      const repositoryId = `${values.ownerName}.${values.repositoryName}`;
      navigate(`/repository/${repositoryId}`);
    } catch (e) {
      if (e.message.includes('already reviewed')) {
        alert('You have already reviewed this repository.');
      }
    }
  };

  return (
    <ReviewContainer 
      onSubmit={handleSubmit}
    />
  );
};

export default Review;