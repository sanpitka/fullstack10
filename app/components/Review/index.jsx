import { useNavigate, useParams } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';
import useRepository from '../../hooks/useRepository';
import Text from '../Text';
import ReviewContainer from './ReviewContainer';

const Review = () => {
  const { id } = useParams();
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const { repository, loading, error } = useRepository(id);


  const handleSubmit = async (values) => {
    try {
      await createReview(values);
      navigate(`/repository/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  let ownerName = '';
  let repositoryName = ''; 
  if (repository && repository.fullName) {
    [ownerName, repositoryName] = repository.fullName.split('/');
  }

  return (
    <ReviewContainer 
      onSubmit={handleSubmit}
      ownerName={ownerName}
      repositoryName={repositoryName}
      repositoryId={id}
    />
  );
};

export default Review;