import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User, Global, Quotation} from '../models/index';
import {UserList} from '../models/user_list';


@Injectable()
export class QuotationService {

  constructor(private http: HttpClient) { }
  getAll(limit, page): any {
    return this.http.get<Quotation>(Global.API_ENDPOINTQ + '/v1/quotation?limit=' + limit + '&page=' + page);
  }
  pdf(): any {
    return this.http.get<Quotation>(Global.API_ENDPOINTQ + '/v1/quotation-pdf');
  }
  downloadInvoice(url: string): any {
    return this.http.get(url, { responseType: 'blob' });
  }
}
