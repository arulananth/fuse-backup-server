export class User {
  id: number;
  // username: string;
  password: string;
  token: string;
  password_confirmation: string;
  city: string;
  repeat_password: string;
  name: string;
  is_enabled: boolean;
  email: string;
  mobile: number;
  telephone: number;
  total: number;
  avatar: string;
  next_page_url: string;
  data: User[];
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  total_users: number;
  not_activated_users: number;
}
