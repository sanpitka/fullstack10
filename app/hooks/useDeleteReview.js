import { useMutation } from '@apollo/client/react';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, { loading, error }] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    await mutate({ variables: { id } });
  };

  return [deleteReview, { loading, error }];
};

export default useDeleteReview;