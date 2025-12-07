import { ActivityIndicator, Text, View } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const RepositoryDetails = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <View>
        <Text>Error loading repository</Text>
      </View>
    );
  }

  return <RepositoryItem item={repository} />;
};

export default RepositoryDetails;