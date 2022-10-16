import {Supplier} from './supplier';

export class SupplierList {
  next_page_url: string;
  total: number;
  prev_page_url: string;
  data: Supplier[];
  no_booking: number;
  no_client: number;
  no_user: number;
}
