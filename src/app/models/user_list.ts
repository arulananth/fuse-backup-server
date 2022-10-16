import {User} from './user';

export class UserList {
  next_page_url: string;
  total: number;
  prev_page_url: string;
  data: User[];
  no_booking: number;
  no_client: number;
  no_user: number;
}
