import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Global, Supplier} from '../models/index';
import {UserList} from '../models/user_list';


@Injectable()
export class SupplierService {

  constructor(private http: HttpClient) { }
  getAll(limit, page): any {
    return this.http.get<Supplier>(Global.API_ENDPOINT + '/v1/supplier?limit=' + limit + '&page=' + page);
  }
  create(supplier: Supplier): any {
    return this.http.post(Global.API_ENDPOINT + '/v1/supplier', supplier);
  }
  pdf(): any {
    return this.http.get<Supplier>(Global.API_ENDPOINTQ + '/v1/quotation-pdf');
  }
  downloadInvoice(url: string): any {
    return this.http.get(url, { responseType: 'blob' });
  }
  getPagination(Url: string): any {
      return this.http.get<Supplier>(Url);
  }
}
