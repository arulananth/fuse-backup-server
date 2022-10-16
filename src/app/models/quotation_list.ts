import {Quotation} from './quotation';

export class QuotationList {
  next_page_url: string;
  total: number;
  prev_page_url: string;
  data: Quotation[];
  no_booking: number;
  no_client: number;
  no_user: number;
}
