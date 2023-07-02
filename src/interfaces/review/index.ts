import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  job_id?: string;
  reviewer_id?: string;
  reviewee_id?: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  user_review_reviewer_idTouser?: UserInterface;
  user_review_reviewee_idTouser?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  job_id?: string;
  reviewer_id?: string;
  reviewee_id?: string;
}
