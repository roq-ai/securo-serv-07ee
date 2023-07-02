import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string(),
  job_id: yup.string().nullable(),
  reviewer_id: yup.string().nullable(),
  reviewee_id: yup.string().nullable(),
});
