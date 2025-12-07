import { useFormik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Username is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100')
    .required('Rating is required'),
  text: yup.string(),
});

const ReviewContainer = ({ onSubmit, ownerName, repositoryName }) => {
  const handleSubmit = (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    onSubmit({ ownerName, repositoryName, rating: Number(rating), text });
  };

  const formik = useFormik({
    initialValues: {
      ownerName,
      repositoryName,
      rating: '',
      text: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return <ReviewForm {...formik} />;
};

export default ReviewContainer;