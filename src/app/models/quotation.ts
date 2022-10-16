export class Quotation {
  id: number;
  ip: number;
  branchAccountNo: string;
  createdAt: string;
  updatedAt: string;
  code: number;
  status: Status;
  quotationTotal: number;
  quotationNo: number;
  note: string;
  userName: string;
  supplierName: string;
  customer: Customer[];
  is_enabled: boolean;
  email: string;
  mobile: number;
  telephone: number;
  total: number;
  avatar: string;
  next_page_url: string;
  data: Quotation[];
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  total_users: number;
  not_activated_users: number;
}
 export class Status {
     quoteStatus: string;
}
export class Customer {
     name: string;
}