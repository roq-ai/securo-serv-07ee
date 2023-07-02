import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  buyer_id?: string;
  seller_id?: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  user_job_buyer_idTouser?: UserInterface;
  user_job_seller_idTouser?: UserInterface;
  _count?: {
    review?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  buyer_id?: string;
  seller_id?: string;
}
